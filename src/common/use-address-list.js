import React, { useEffect, useState } from "react"
import { Dropdown, Form, Menu, Modal, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2'
import useRequest from "./use-request"
import axios from "axios"
import { RadioButton, RoundedButton, TextInputField } from "../components/Common"

export default () => {
    const [addresses, setAddresses] = useState([])
    const [selectedAddress, setSelectedAddress] = useState()
    const [addAddressModal, showAddAddressModal] = useState(false)
    const [editAddressDetails, setEditAddressDetails] = useState()

    const { makeRequest } = useRequest()

    useEffect(() => {
        fetchAddresses()
    }, [])

    const fetchAddresses = () => {
        makeRequest({
            url: '/user/addresses',
            method: 'GET',
            onSuccess: data => {
                setAddresses(data)
            },
        })
    }

    const deleteAddress = (addressId) => {
        Swal.fire({
            title: "Are you sure you want to delete this address?",
            icon: "warning",
            showCancelButton: true,
            allowOutsideClick: false,
            confirmButtonColor: "#f85050",
            reverseButtons: true
        }).then((result) => {
            if (result.value) {
                makeRequest({
                    url: `/user/addresses/${addressId}`,
                    method: 'DELETE',
                    onSuccess: () => {
                        fetchAddresses()
                    }
                })
            }
        });
    }

    const AddressCard = ({ address, serviceable = true, selected, onSelect }) => {

        const menu = () => (
            <Menu>
                <Menu.Item key="0">
                    <a
                        onClick={() => { setEditAddressDetails(address); showAddAddressModal(true) }}
                    >
                        Edit
                    </a>
                </Menu.Item>
                <Menu.Item key="1">
                    <a onClick={() => deleteAddress(address.id)}>Delete</a>
                </Menu.Item>
            </Menu>
        )

        return (
            <label>
                <input
                    type="radio"
                    name="address"
                    value={address.id}
                    checked={selected}
                    onChange={onSelect}
                />
                <div className="orderStep-patients">
                    <span className="custom-checkbox"><i className="fas fa-check"></i></span>
                    <div className="ordeStep-patDetails">
                        <h4>{address.name}</h4>
                        <p>{address.address}</p>
                        <p>{address.city}, {address.state} - {address.pincode}</p>
                        {!serviceable ? <p style={{ color: 'red' }}>Not Serviceable</p> : <p>Mobile: +91-{address.phone}</p>}
                    </div>
                    <Dropdown overlay={() => menu()} trigger={['click']} placement="bottomRight">
                        <a className="ant-dropdown-link " onClick={e => e.preventDefault()}>
                            <i className="fas fa-ellipsis-v"></i></a>
                    </Dropdown>
                </div>
            </label>
        )
    }

    const AddAddressModal = () => {
        const [addressType, setAddressType] = useState()
        const [pincode, setPincode] = useState('')
        const [pincodeServiceable, setPincodeServiceable] = useState(true)
        const [address, setAddress] = useState()
        const [name, setName] = useState()
        const [phoneNo, setPhoneNo] = useState('')
        const [fetchingCity, setFetchingCity] = useState(false)
        const [cityData, setCityData] = useState()
        const [editMode, setEditMode] = useState(false)
        const [addressId, setAddressId] = useState()
        const [loading, setLoading] = useState(false)
        // const addressTypes = ['HOME', 'OFFICE', 'OTHER']

        const addressTypes = [
            {
                label: 'Home',
                value: 'home',
            }, {
                label: 'Office',
                value: 'office',
            }, {
                label: 'Other',
                value: 'other',
            }
        ]

        useEffect(() => {
            if (addAddressModal) {
                setEditMode(false)
                if (editAddressDetails) {
                    setEditMode(true)
                    const {
                        type, pincode, name, address, phone, id
                    } = editAddressDetails
                    fetchCity(pincode + "")
                    setAddressType(type.toUpperCase())
                    setName(name)
                    setAddress(address)
                    setPhoneNo(phone)
                    setAddressId(id)
                }
            }
        }, [addAddressModal])

        const saveAddress = () => {
            // e.preventDefault()
            if (!cityData) return

            setLoading(true)
            makeRequest({
                url: editMode ? `/user/addresses/${addressId}` : `/user/addresses`,
                method: editMode ? 'PUT' : 'POST',
                data: {
                    name,
                    pincode,
                    phone: phoneNo,
                    address,
                    type: addressType,
                    city: cityData.city,
                    state: cityData.state,
                    country: cityData.country,
                },
                onSuccess: data => {
                    onHide()
                    fetchAddresses()
                    setEditAddressDetails()
                },
                onError: setLoading(false)
            })
        }

        const onHide = () => {
            showAddAddressModal(false)
            setCityData({})
            setName()
            setPhoneNo()
            setPincode()
            setAddress()
            setAddressType()
            setEditMode(false)
            setEditAddressDetails()
            setLoading(false)
        }

        const fetchCity = async (text) => {
            setPincode(text)
            if (text.length == 6) {
                setFetchingCity(true)
                const { data } = await axios.get(`https://api.1mg.com/webservices/locations?term=${text}`)
                data?.result ? setCityData(data.result[0].info) : setCityData(null)
                setFetchingCity(false)
            }
        }

        return (
            <Modal
                title={`${editMode ? "Edit" : "Add New"} Address`}
                open={addAddressModal}
                onCancel={onHide}
                footer={null}
                keyboard={false}
                centered
                className="addAddress getCall designSystemLayout"
                width={420}
            >
                <Form layout="vertical" onFinish={(e) => saveAddress(e)}>
                    <Form.Item label="Name" required>
                        <TextInputField
                            placeholder="Enter your name"
                            pattern="[a-zA-Z\s]+"
                            value={name}
                            required
                            autoFocus={true}
                            onChange={e => setName(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item label="Phone Number" required>
                        <TextInputField
                            type="text"
                            placeholder="Enter phone number"
                            value={phoneNo}
                            required
                            pattern="[0-9]{10}"
                            title="Please enter valid 10-digit Phone Number"
                            maxLength={10}
                            onChange={e => setPhoneNo(e.target.value)} />
                    </Form.Item>
                    <Form.Item label="Address" required>
                        <TextInputField placeholder="Enter address" required value={address} onChange={e => setAddress(e.target.value)} />
                    </Form.Item>
                    <Form.Item label="Pin Code" required>
                        <div className="pincodeInput">
                            <TextInputField
                                placeholder="Enter pincode"
                                required
                                type="text"
                                pattern="[0-9]{6}"
                                maxLength={6}
                                value={pincode}
                                title="Please enter valid 6-digit Pincode"
                                onChange={e => fetchCity(e.target.value)}
                            />
                            <span className="cityname">
                                {
                                    fetchingCity ?
                                        <Spin indicator={<LoadingOutlined style={{ insetInlineStart: -10, top: 8 }} spin />}>
                                            <span className="sr-only">Loading...</span>
                                        </Spin>
                                        : pincode?.length >= 6 &&
                                        (cityData != null ? <> {cityData && <span> {cityData?.city}, {cityData?.state}</span>}</> :
                                            <i class="fa fa-exclamation-circle"></i>)
                                }
                            </span>
                        </div>
                    </Form.Item>
                    {(pincode?.length == 6 && !pincodeServiceable) &&
                        <div className="notePinCode">
                            <h6>Please Note</h6>
                            <p>
                                We do not guarantee a 100% serviceability in your region. However, if we're unable to collect your sample, we will cancel your order and initiate a full-refund within 24 hours.
                            </p>
                        </div>
                    }

                    <Form.Item>
                        <div>
                            <ul>
                                <RadioButton
                                    options={addressTypes}
                                    onChange={e => setAddressType(e.target.value)}
                                    value={addressType?.toLowerCase()}
                                    containerStyle={{ display: 'flex', marginRight: 16 }}
                                />
                            </ul>
                        </div>
                    </Form.Item>
                    <RoundedButton label="Save" loading={loading} htmlType="submit" disabled={loading} containerStyle={{ marginLeft: "auto", fontWeight: 400 }} />
                </Form>

            </Modal >
        )
    }

    const AddressList = ({ nonServiceableAddress }) => {
        return (
            <div className="user-info-wrapper">
                {addresses.map((address, i) =>
                    <AddressCard
                        address={address}
                        onSelect={() => setSelectedAddress(address)}
                        selected={selectedAddress?.id == address.id}
                        serviceable={!nonServiceableAddress?.includes(address.id)}
                    />
                )}
                <AddAddressModal />
            </div>
        )
    }

    const addAddress = () => {
        showAddAddressModal(true)
    }

    return { addresses, AddressList, selectedAddress, addAddress, fetchAddresses, deleteAddress }
}

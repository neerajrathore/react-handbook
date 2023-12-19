import React, { useEffect, useState, useContext } from 'react'
import { CartQuantity, RoundedButton } from "."
import { Modal, Button } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'

export const AddToCartButton = ({ minOrderQuantity = 1, cartCount, addToCart, deleteItem, containerStyle, ...buttonProps }) => {
    const [cartQuantity, setCartQuantity] = useState(cartCount)
    const [updating, setUpdating] = useState(false)
    const [modal, showModal] = useState(false)

    if (minOrderQuantity === null) {
        minOrderQuantity = 1
    }

    useEffect(() => {
        setCartQuantity(cartCount)
    }, [cartCount])

    const onAddToCart = async () => {
        setUpdating(true)
        try {
            const quantity = await addToCart({ quantity: minOrderQuantity })
            setCartQuantity(quantity)
            setUpdating(false)
        } catch (err) {
            setUpdating(false)
        }
    }

    const onIncreaseQuantity = async () => {
        setUpdating(true)
        try {
            const quantity = await addToCart({ quantity: Number(cartQuantity) + 1 })
            setCartQuantity(quantity)
            setUpdating(false)
        } catch (err) {
            setUpdating(false)
        }
    }

    const onDecreaseQuantity = async () => {
        if (cartQuantity <= minOrderQuantity) return
        setUpdating(true)
        try {
            const quantity = await addToCart({ quantity: Number(cartQuantity) - 1 })
            setCartQuantity(quantity)
            setUpdating(false)
        } catch (err) {
            setUpdating(false)
        }
    }

    const onDelete = () => {
        try {
            deleteItem()
            setCartQuantity(0)
            setUpdating(false)
        } catch (err) {
            setUpdating(false)
        }
        showModal(false)
    }

    return (
        <>
            {cartQuantity ?
                <CartQuantity
                    loading={updating}
                    minOrderQuantity={minOrderQuantity}
                    cartQuantity={cartQuantity}
                    onDecrement={() => onDecreaseQuantity()}
                    onDelete={() => showModal(true)}
                    onIncrement={() => onIncreaseQuantity()}
                    containerStyle={containerStyle}
                />
                :
                <RoundedButton
                    loading={updating}
                    label='Add to Cart'
                    leftIcon='add-outline'
                    onClick={() => onAddToCart()}
                    shape="round"
                    {...buttonProps}
                />
            }

            <Modal
                open={modal}
                footer={null}
                maskClosable={false}
                width={420}
                onCancel={() => showModal(false)}
                className='radius-modal designSystemLayout'
            >
                <div className='tw-py-4 tw-text-center '>
                    <ion-icon style={{ fontSize: 76, color: '#209797', marginBottom: 16 }} name="information-circle-outline"></ion-icon>
                    <h6 style={{ color: 'var(--gray---gray-900)', marginBottom: 24 }}>Are you sure you want to remove this product from the cart?</h6>
                    <RoundedButton onClick={() => onDelete()} label='Continue' size="large" type="primary" block />
                    <RoundedButton onClick={() => showModal(false)} label='Dismiss' size='medium' type='link' block containerStyle={{ marginTop: 16 }}>Dismiss</RoundedButton>
                </div>
            </Modal>
        </>
    )
}

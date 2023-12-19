const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
import React, { useContext } from 'react'
import { Card, Row, Col, Popconfirm } from 'antd'
import { EditOutlined, DeleteOutlined, AppstoreAddOutlined } from '@ant-design/icons';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { ChallengeContext } from '../../context/ChallengeContext'
import { useNavigate } from "react-router-dom"

const DragDropModules = () => {
    const { selectedModules, setSelectedModules } = useContext(ChallengeContext)

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        if (result.destination.index === result.source.index) {
            return;
        }

        const reOrderedList = reorder(
            selectedModules,
            result.source.index,
            result.destination.index
        )
        setSelectedModules([...reOrderedList]);
    }

    const reorder = (list, startIndex, endIndex) => {
        const [removed] = list.splice(startIndex, 1);
        list.splice(endIndex, 0, removed);

        return list;
    };

    return (
        <Card bodyStyle={{ padding: "0 24px" }} style={{ width: '100%', }}>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {
                                selectedModules.map((module, index) =>
                                    <DragDropCard
                                        key={module.moduleId}
                                        index={index}
                                        moduleId={module.moduleId}
                                    />
                                )
                            }
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </Card>
    )

}

const DragDropCard = ({ index, moduleId }) => {
    const navigate = useNavigate()
    const { allModules, moduleIcons, selectedModules, setModuleModal, challengeDetails, showManageLink, deleteModule } = useContext(ChallengeContext)
    const selectedModule = allModules.find(m => m.id == moduleId)
    const { id, name, slug, isTribeMode, description } = selectedModule ? selectedModule : {}

    const getItemStyle = (isDragging, draggableStyle) => ({

        // some basic styles to make the items look a bit nicer
        userSelect: "none",
        margin: `0 0 8px 0`,

        // change background colour if dragging
        background: isDragging && "rgb(222, 235, 255)",

        // styles we need to apply on draggables
        ...draggableStyle
    })

    return (
        <Draggable key={slug} draggableId={slug} index={index} >
            {(provided, snapshot) => (
                <div className="drag-module-item" style={{ width: '100%' }}>
                    <Row gutter={20}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                        )}
                    >
                        <Col lg={18} md={17} style={{ padding: "24px 0px", marginBottom: 10, }}>
                            <div className="module-figure">
                                <img src={moduleIcons[slug].default} style={{ width: 50 }} />
                            </div>
                            <div className="card-desc" style={{ paddingLeft: 70 }}>
                                <h5>{name}</h5>
                                <p style={{ marginBottom: 0, marginTop: 10, }}>
                                    {JSON.parse(description).details}
                                </p>
                            </div>
                        </Col>
                        <Col lg={6} md={23}>
                            <div className="selected-card-link">
                                {
                                    showManageLink && isTribeMode &&
                                    <a style={{ color: '#209797' }} onClick={() => navigate(`/challenges/${challengeDetails.id}/tribes`)}>
                                        <AppstoreAddOutlined /> Manage Tribes
                                    </a>
                                }

                                {
                                    showManageLink && slug === "daily-tasks" &&
                                    <a style={{ color: '#209797' }} onClick={() => navigate(`/challenges/${challengeDetails.id}/manage-tasks`)}>
                                        <AppstoreAddOutlined /> Manage Tasks
                                    </a>
                                }

                                <a style={{ color: '#209797', marginLeft: 20 }}
                                    onClick={() => setModuleModal({ show: true, moduleId: id })}
                                >
                                    <EditOutlined />
                                </a>
                                {
                                    selectedModules.length > 1 &&
                                    <Popconfirm
                                        title="Are you sure to delete this module?"
                                        onConfirm={() => deleteModule(id)}
                                        onCancel={() => { }}
                                        okText="Yes"
                                        cancelText="No"
                                    >
                                        <a style={{ color: '#ff4d4f', marginLeft: 20 }}><DeleteOutlined /> </a>
                                    </Popconfirm>
                                }
                            </div>
                        </Col>
                    </Row>
                </div>
            )}
        </Draggable>
    )
}

export default DragDropModules;

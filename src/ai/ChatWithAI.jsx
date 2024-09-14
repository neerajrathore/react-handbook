import React, { useEffect, useState } from 'react';
import Modal from '../Modal/Modal.tsx';
import openAIConfig from './config.js';
import ChatArea from '../common/ChatArea/ChatArea.jsx';

const ChatWithAI = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [chatData, setChatData] = useState([]);
    const [userPrompt, setUserPrompt] = useState('')

    useEffect(() => {
        if (userPrompt.length > 0) {
            gptAPI(userPrompt)
        }
    }, [userPrompt])

    async function gptAPI(userPrompt) {
        console.log(chatData, "gptAPI");
        console.log(userPrompt);
        const chatCompletion = await openAIConfig.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'user',
                    content: userPrompt
                }
            ]
        })

        console.log(chatCompletion);
        setChatData((prev) => {
            let data = { ...prev }
            return [
                {
                    key: Date.now(),
                    prompt: userPrompt,
                    response: chatCompletion.choices[0].message.content
                }
            ]
        })
    }

    // This function will handle opening the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // This function will handle closing the modal
    const closeModal = (event) => {
        console.log(event, "closeModal");
        setIsModalOpen(false);
    };

    const addDataToChat = (value) => {
        // setChatData((prev) => {
        //     return [
        //         ...prev,
        //         {
        //             key: Date.now(),
        //             prompt: value
        //         }

        //     ]
        // })
    }

    const modalSubmit = (data) => {
        console.log(data);
    }

    console.log(chatData, "chatData");

    return (
        <>
            {isModalOpen &&
                <Modal
                    heading={"Chat"}
                    handleCloseIconClick={() => closeModal()}
                    isFooter={true}
                    handleSubmitButton={modalSubmit}
                >
                    {chatData.length > 0 && chatData.map((item) => {
                        return (
                            <div>
                                <ChatArea chatContent={item.prompt}></ChatArea>
                                {
                                    item.response && <ChatArea position={'right'} chatContent={item.response}></ChatArea>
                                }
                            </div>
                        )
                    })}
                    <input
                        id='prompt-input'
                        placeholder='Enter Prompt'
                        type="text"
                        onKeyDown={(ev) => {
                            if (ev.key === 'Enter') {
                                console.log(ev.target.value);
                                addDataToChat(ev.target.value)
                                setUserPrompt(ev.target.value)
                                ev.target.value = ''
                            }
                        }}
                    />
                </Modal>
            }
            <button
                id='open-my-modal'
                style={{ border: '2px solid red', color: 'red' }}
                onClick={openModal}
            >
                Open Modal
            </button>
        </>
    );
};

export default ChatWithAI;

// ReactDOM.render(
//     React.createElement(ChatWithAI, { name: "page" }, null),
//     document.querySelector("#secondRoot")
// );

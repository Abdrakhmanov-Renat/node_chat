'use strict';

const chatService = require('../services/chats.service');

const createChat = (req, res) => {
  const { chatname, username } = req.body;

  if (!chatname || !username) {
    return res.status(401).json({ error: "Unauthorized" })
  }

  const chat = chatService.addNewChat(username, chatname);

  res.status(200).send(chat);
};

const deleteChat = async (req, res) => {
  const { chatId } = req.params;

  if (!chatId) {
    throw new Error("401");
  }

  await chatService.deleteOneChat(chatId);

  res.status(200).send('Chat deleted');
};

const updateChat = async (req, res) => {
  const { chatId } = req.params;
  const { newName } = req.body;

  if (!chatId || !newName) {
    throw new Error("401");
  }

  const updatedChat = await chatService.changeChatName(chatId, newName);

  if (!updatedChat) {
    throw new Error("404");
  }

  res.status(200).send(updatedChat);
};

const showAllChats = (req, res) => {
  const chats = chatService.getAllChats();

  res.send(chats);
};

module.exports = {
  createChat,
  deleteChat,
  showAllChats,
  updateChat
};

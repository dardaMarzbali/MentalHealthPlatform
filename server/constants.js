// Database collections
const USERS_COLLECTION = "Users";
const TOPICS_COLLECTION = "Topics";
const CHATS_COLLECTION = "Chats";
const MESSAGE_COLLECTION = "Message";

// Status messages
const SUCCESS_STATUS_MESSAGE = 1;
const FAILED_STATUS_MESSAGE = -1;

// MongoDB constants
const MONGO_URL = "mongodb://localhost:27017/";
const DATABASE_NAME = 'mentalhealthdb';

module.exports = {
    USERS_COLLECTION,
    TOPICS_COLLECTION,
    CHATS_COLLECTION,
    MESSAGE_COLLECTION,
    MONGO_URL,
    DATABASE_NAME,
    SUCCESS_STATUS_MESSAGE,
    FAILED_STATUS_MESSAGE
};
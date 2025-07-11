import { StreamChat } from "stream-chat";
import "dotenv/config";

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  console.error("Stream API key or Secret is missing");
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async (userData) => {
  try {
    await streamClient.upsertUsers([userData]);
    return userData;
  } catch (error) {
    console.error("Error upserting Stream user:", error);
  }
};
//todo later

export const generateStreamToken = (userId) => {
  try {
    const token=generateStreamToken(requestAnimationFrame.user.id);
    res.status(200).json({token});
  } catch (error) {
    console.log("error in getstream controller: " ,error.message);
        res.status(500).json({message: "Internal Server Error"});

  }
};
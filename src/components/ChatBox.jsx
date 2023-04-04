import { Configuration, OpenAIApi } from 'openai';
import React, { useState } from 'react'

function ChatBox() {
    const config=new Configuration({
        apiKey:process.env.OPENAI_API_KEY,
    })
  return (
    <div><p>This is chat box</p> </div>
  )
}

export default ChatBox;
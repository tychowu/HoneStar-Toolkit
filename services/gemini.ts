import { GoogleGenAI } from "@google/genai";
import { PLANS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_PROMPT = `你是一个保诚(Prudential)香港诚星区域 @ 星火家族的招募顾问。
你的目标是基于以下财务计划信息，为潜在的新人提供专业、亲切且准确的解答。

计划列表数据: ${JSON.stringify(PLANS)}

回答规范：
1. 语言使用简体中文。
2. 回答要体现专业性和保诚的品牌形象。
3. 如果用户询问推荐，请询问他们的学历、过往收入和工作背景。
4. 特别强调'追讨/离职机制(Clawback)'是财务计划中必须注意的风险点。
5. 保持简洁，使用 Markdown 格式。`;

// Fix: Correctly implemented history support for multi-turn conversation
export async function askAdvisor(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = []) {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      history: history,
      config: {
        systemInstruction: SYSTEM_PROMPT,
      }
    });

    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "抱歉，我现在遇到了一点技术问题，请稍后再试或直接咨询您的招募经理。";
  }
}

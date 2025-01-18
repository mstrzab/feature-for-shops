const TELEGRAM_CHAT_ID = "1057323678";

export const sendTelegramMessage = async (message: string) => {
  const response = await fetch("/api/telegram/send-message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      message,
    }),
  });
  
  if (!response.ok) {
    throw new Error("Failed to send Telegram message");
  }
  
  return response.json();
};

export const sendOrderConfirmation = async (orderNumber: string, productName: string) => {
  return sendTelegramMessage(
    `✅ Order #${orderNumber} for ${productName} has been successfully paid!`
  );
};
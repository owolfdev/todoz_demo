import { WebClient } from "@slack/web-api";

const slackClient = new WebClient(process.env.SLACK_BOT_TOKEN);

export async function sendSlackMessage(channel: string, text: string) {
  try {
    await slackClient.chat.postMessage({
      channel,
      text,
    });
    console.log("Slack message sent successfully");
  } catch (error) {
    console.error("Error sending Slack message: ", error);
  }
}

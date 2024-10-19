import type { Metadata } from "next";
import PrivacyPolicy from "@/components/policy/container";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy - Tuning Thunder",
  description:
    "The Ultimate Music Bot for Your Discord Server. Play music from various sources, manage playlists, and interact with your server members.",
};

const sections = [
  {
    title: "Introduction",
    content:
      "Welcome to Tuning Thunder, a Discord bot designed to enhance your server with music playback and voting features. This Privacy Policy explains how we collect, use, and protect your information when you interact with our bot. By using TuningThunder, you agree to the terms outlined in this policy.",
  },
  {
    title: "Data We Collect",
    content:
      "User Information: We collect Discord user IDs to identify users within the bot's operations and log the information for votes done through top.gg. We collect channel IDs where the bot is active to manage music requests. We collect message IDs to track music requests.\n\nMessage Content: We access and process message content to respond to music requests (e.g., `alan walker faded in music requests channel`). This allows us to fulfill your requests for music playback.",
  },
  {
    title: "How We Use Your Data",
    content:
      "To Provide Services: User IDs, channel IDs, and message content are used to process and fulfill music requests, manage playlists, and control playback. We use message IDs and user IDs to validate and record votes on top.gg or other platforms.\n\nTo Improve Our Services: We may analyze usage data to enhance the bot's functionality and user experience.",
  },
  {
    title: "Data Sharing",
    content:
      "Third-Party Services: We may share certain data (e.g., user IDs) with top.gg to validate and record votes. This is necessary for maintaining the bot's presence on the voting platform.\n\nLegal Requirements: We may disclose your information if required to do so by law or in response to valid legal requests.",
  },
  {
    title: "Data Retention",
    content:
      "Retention Period: Music request messages are processed in real-time and are not stored long-term. We may retain minimal data necessary to manage ongoing requests and interactions. We retain user and channel IDs only as long as necessary to provide the bot's functionalities.\n\nDeletion Requests: Users can request the deletion of their data by contacting us through the provided contact information.",
  },
  {
    title: "Data Security",
    content:
      "We implement reasonable security measures to protect your data from unauthorized access or disclosure. However, please be aware that no method of transmission over the Internet or electronic storage is 100% secure.",
  },
  {
    title: "User Rights",
    content:
      "Access and Correction: Users may request access to their data and correct any inaccuracies.\n\nData Deletion: Users can request the deletion of their data by contacting us on discord: ayareve.",
  },
  {
    title: "Changes to This Privacy Policy",
    content:
      "We may update this Privacy Policy from time to time. Any changes will be communicated through an announcement on our bot or through the bot's description. Your continued use of the bot constitutes acceptance of any changes.",
  },
  {
    title: "Contact Information",
    content:
      "For any questions or concerns about this Privacy Policy, please contact me on discord: dark._queen.",
  },
  {
    title: "Consent",
    content:
      "By using Tuning Thunder, you consent to the collection and use of your information as described in this Privacy Policy.",
  },
];

export default function PolicyPage() {
  return (
    <div className="p-8">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Privacy Policy</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <PrivacyPolicy sections={sections} />
    </div>
  );
}

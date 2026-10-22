export interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  time: string;
  quickReplies?: string[];
  card?: {
    title: string;
    subtitle: string;
    badge: string;
    details: { label: string; value: string }[];
  };
}

export interface ChatScenario {
  id: string;
  tabLabel: string;
  businessName: string;
  businessType: string;
  avatarText: string;
  statusText: string;
  messages: ChatMessage[];
}

export const chatScenarios: ChatScenario[] = [
  {
    id: "lead-qualification",
    tabLabel: "Lead Qualification & Booking",
    businessName: "Nexus Freight Solutions",
    businessType: "Industrial B2B Logistics",
    avatarText: "NF",
    statusText: "AI Agent · Instant Reply",
    messages: [
      {
        id: "m1",
        sender: "user",
        text: "Hi, hume Ludhiana se Mundra Port ke liye 40ft container dispatch rates chahiye monthly contract pe.",
        time: "10:32 AM",
      },
      {
        id: "m2",
        sender: "bot",
        text: "Namaste! Bilkul, Nexus Freight offers dedicated export container dispatch. Average monthly volume kitna expected hai?",
        time: "10:32 AM",
        quickReplies: ["5-10 Containers/mo", "15-25 Containers/mo", "Enterprise Bulk (30+)"],
      },
      {
        id: "m3",
        sender: "user",
        text: "Around 12 to 15 containers har mahine. Transit time aur GPS tracking included hai?",
        time: "10:33 AM",
      },
      {
        id: "m4",
        sender: "bot",
        text: "Haanji! 100% live GPS telematics + FASTag monitoring real-time dashboard me rehta hai. Ludhiana ICD to Mundra transit time 48-60 ghante standard hai.",
        time: "10:33 AM",
      },
      {
        id: "m5",
        sender: "bot",
        text: "Commercial contract rate sheet lock karne ke liye, kya hum aaj 4:30 PM pe logistics manager ke sath 10-minute briefing schedule karein?",
        time: "10:34 AM",
        quickReplies: ["Haan 4:30 PM done", "Share on WhatsApp first"],
      },
      {
        id: "m6",
        sender: "user",
        text: "Haan 4:30 PM done, book kar do.",
        time: "10:34 AM",
      },
      {
        id: "m7",
        sender: "bot",
        text: "Direct confirmation generated! Priority briefing locked with Logistics Ops team.",
        time: "10:34 AM",
        card: {
          badge: "Consultation Confirmed",
          title: "B2B Freight Briefing",
          subtitle: "Nexus Freight Commercial Desk",
          details: [
            { label: "Route", value: "Ludhiana ICD ⇄ Mundra Port" },
            { label: "Volume", value: "12-15 Containers/month" },
            { label: "Time Slot", value: "Today @ 4:30 PM IST (Google Meet)" },
            { label: "SMS / WhatsApp alert", value: "Sent to registered contact" },
          ],
        },
      },
    ],
  },
  {
    id: "product-order",
    tabLabel: "Product Enquiry & Tracking",
    businessName: "Velox Precision Tools",
    businessType: "Industrial CNC & Hand Tools",
    avatarText: "VP",
    statusText: "AI Agent · 24/7 Active",
    messages: [
      {
        id: "m201",
        sender: "user",
        text: "Hello, order #VX-8841 status check karna hai. Dispatch ho gaya kya?",
        time: "02:14 PM",
      },
      {
        id: "m202",
        sender: "bot",
        text: "Checking order database for #VX-8841... Ek second!",
        time: "02:14 PM",
      },
      {
        id: "m203",
        sender: "bot",
        text: "Mil gaya! Order #VX-8841 (5x Carbide End Mill sets) Delhi Hub se dispatch ho chuka hai via BlueDart Express.",
        time: "02:14 PM",
        card: {
          badge: "In Transit · Out for Delivery Tomorrow",
          title: "Order #VX-8841",
          subtitle: "Carbide End Mills (Industrial Kit)",
          details: [
            { label: "Carrier", value: "BlueDart Express AWB #8894120" },
            { label: "Current Location", value: "Ambala Sorting Center" },
            { label: "Expected Delivery", value: "Tomorrow by 2:00 PM" },
          ],
        },
      },
      {
        id: "m204",
        sender: "user",
        text: "Great! Invoice GST copy download link mil sakti hai?",
        time: "02:15 PM",
      },
      {
        id: "m205",
        sender: "bot",
        text: "Bilkul! GST Tax Invoice PDF aapke registered WhatsApp aur email pe instantly share kar diya gaya hai. Kuch aur check karna hai?",
        time: "02:15 PM",
        quickReplies: ["View Catalog", "Contact Account Manager", "All Good, Thanks!"],
      },
      {
        id: "m206",
        sender: "user",
        text: "All Good, Thanks! Super fast help.",
        time: "02:16 PM",
      },
      {
        id: "m207",
        sender: "bot",
        text: "Always here to help! Velox Precision Tools me contact karne ke liye shukriya.",
        time: "02:16 PM",
      },
    ],
  },
  {
    id: "customer-support",
    tabLabel: "Customer Support & FAQ",
    businessName: "Aura Diagnostic Center",
    businessType: "Healthcare & Lab Diagnostics",
    avatarText: "AD",
    statusText: "AI Healthcare Desk · Online",
    messages: [
      {
        id: "m301",
        sender: "user",
        text: "Kal subah fasting blood test ke liye home sample collection available hai Model Town area me?",
        time: "08:45 PM",
      },
      {
        id: "m302",
        sender: "bot",
        text: "Good evening! Haanji, Model Town & Sarabha Nagar me kal subah 6:30 AM se 10:00 AM ke slots available hain.",
        time: "08:45 PM",
        quickReplies: ["7:00 AM Slot", "8:00 AM Slot", "9:00 AM Slot"],
      },
      {
        id: "m303",
        sender: "user",
        text: "8:00 AM slot book kardo. Complete Lipid Profile and HbA1c test hai.",
        time: "08:46 PM",
      },
      {
        id: "m304",
        sender: "bot",
        text: "Understood! Note: Minimum 10-12 ghante ki overnight fasting zaroori hai. Water can be taken normally.",
        time: "08:46 PM",
      },
      {
        id: "m305",
        sender: "user",
        text: "Reports same day mil jayengi online?",
        time: "08:47 PM",
      },
      {
        id: "m306",
        sender: "bot",
        text: "Haanji, evening 6:00 PM tak NABL-accredited PDF report aapke WhatsApp pe direct aa jayegi.",
        time: "08:47 PM",
        card: {
          badge: "Home Visit Reserved",
          title: "Diagnostic Phlebotomy Visit",
          subtitle: "Aura Diagnostic Mobile Team",
          details: [
            { label: "Tests", value: "Lipid Profile + HbA1c" },
            { label: "Slot", value: "Tomorrow 8:00 AM - 8:30 AM" },
            { label: "Location", value: "Model Town, Ludhiana" },
            { label: "Fasting Advice", value: "10-12 hours overnight" },
          ],
        },
      },
    ],
  },
];

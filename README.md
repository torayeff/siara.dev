# SIARA: Semantic Indexing and Retrieval Agent

> **Status:** Pre-Seed / MVP Definition  
> **Vertical:** B2B Sales Enablement / AI Agents  
> **The Mission:** "End the era of dead pixels. Turn every demo video into an active sales agent."

---

## 1. The Executive Summary

**Siara** is not a video editor. It is a **Sales Weapon**.

We solve the "Async Gap" in B2B sales. Currently, sales teams rely on sending static video links (Loom, YouTube, Zoom) to scale their outreach. This is a broken mechanism because it forces the buyer to scrub through linear time to find specific answers.

**Siara wraps an AI Agent around your existing video assets.** It watches the video, memorizes your documentation, and sits inside the player to answer prospect questions instantly, 24/7.

---

## 2. The Problem: "The Passive Video Trap"

The modern sales stack has a fatal flaw: **High Bandwidth, Zero Retrieval.**

1.  **The "Black Box" Failure:**
    *   Sales Reps send a 12-minute demo.
    *   The Prospect has *one* deal-breaking question (e.g., *"Does this support SSO?"*).
    *   The answer is at timestamp `08:42`.
    *   **Result:** The prospect does not watch. They do not find the answer. They close the tab. The deal dies in silence.

2.  **The Response Lag:**
    *   If the prospect *does* email the question, the Sales Rep replies 4 hours later.
    *   **Result:** The "Moment of Intent" has passed. The buyer has moved on to a competitor.

3.  **The "Slop" Burden:**
    *   High-paid Sales Engineers spend 40% of their week answering the same 5 questions: *"Is it GDPR compliant?", "How much is it?", "Does it integrate with Hubspot?"*
    *   **Result:** Talent is wasted on repetitive objection handling.

---

## 3. The Solution: SIARA (Semantic Indexing and Retrieval Agent)

**Siara** transforms a **Monologue** (Video) into a **Dialogue** (Agent).

### The User Experience (The "Happy Path"):

1.  **Ingest (The Intel):**
    *   The Sales Rep uploads a standard "Master Demo" (MP4 or YouTube link).
    *   They upload "Truth Source" documents: Pricing PDF, API Documentation, Case Studies.
    *   *Siara* indexes the visual frames and the audio transcript to build a "Mental Model" of the product.

2.  **Deploy (The Vector):**
    *   The Rep generates a unique link for the prospect: `siara.video/v/microsoft`.
    *   The page is personalized: *"Prepared for the Microsoft Team."*

3.  **Engage (The Mission):**
    *   The prospect hits play.
    *   At minute 2, they pause and type in the Siara Chat: *"Can I export this data to CSV?"*
    *   **Siara Answers Instantly:** *"Yes. As shown at the 04:15 mark, there is a one-click CSV export. We also support JSON API exports. Would you like to see the API docs?"*

4.  **Close (The Objective):**
    *   When Siara detects high intent (or runs out of answers), it triggers the CTA: *"Book a live session with [Rep Name]."*

---

## 4. The "Slop" Thesis (Why We Win)

The AI hype cycle is focused on **Creation** (Generative AI). We are focused on **Filtering** (Retrieval AI).

We are not trying to be creative. We are automating the **Mandatory Sales Slop**.
*   **The Slop:** Answering basic compliance, pricing, and feature questions.
*   **The Value:** Siara acts as the "First Line of Defense." It filters out the noise so the human Sales Rep only engages when the buyer is educated and ready to close.

**We do not replace the Sales Rep. We replace the FAQ section.**

---

## 5. Scope of Work (MVP)

**Phase 1: The "Iron" Release**

### Core Features (Must Have)
*   **The Universal Wrapper:** We do not host video if we can avoid it. We wrap YouTube/Vimeo/Mux embeds to keep costs low.
*   **The RAG Brain:**
    *   **Visual Indexing:** OCR on video frames (detecting buttons like "Settings" or "Export").
    *   **Context Window:** GPT-4o pipeline that ingests Video Transcript + 3 PDF files max.
*   **The Interface:**
    *   Split View: Video (Left) + Siara Agent (Right).
    *   Timeline Markers: When Siara answers, it drops a pin on the video timeline: *"Jump to relevant section."*
*   **The Magic Link System:** Admin dashboard to create/manage client links.

### The Anti-Roadmap (What We Will NOT Build)
*   ❌ **Generative Video:** No AI Avatars. No Lip-Syncing. No Deepfakes. (High cost, "Uncanny Valley" risk).
*   ❌ **Video Editing:** We are not an editor. Users must upload a finished video.
*   ❌ **Screen Recording:** We do not compete with Loom. We import from Loom.

---

## 6. The Moat: "Intent Analytics"

This is the hidden value proposition for the Enterprise Buyer (VP of Sales).

Because prospects *talk* to Siara, we capture data that Loom cannot see.
*   **Loom sees:** *"User watched 50%."*
*   **Siara sees:** *"User asked about 'Security' 3 times, then asked about 'Pricing' for Enterprise tiers."*

**The Insight:** We provide the Sales Director with a **"Confusion Map."**
> *"Alert: 60% of prospects ask about 'Integration' at minute 3. Your video doesn't cover integration until minute 9. Edit your video."*

---

## 7. Business Model

**Target:** Mid-Market B2B SaaS Companies (ACV $10k - $50k).

**Pricing Strategy:**
*   **Free (Scout):** 1 Active Video, Public Link, Watermarked.
*   **Pro (Ranger) - $49/mo:** 5 Active Videos, PDF Knowledge Base, Custom URL.
*   **Team (Command) - $149/seat:** CRM Integration (Salesforce), Intent Analytics Dashboard.

**Go-To-Market:**
**"Inception Strategy."** We sell Siara by sending Siara links.
1.  Find a prospect (SaaS Founder).
2.  Take *their* public demo video from YouTube.
3.  Put it into Siara.
4.  Send them the link: *"I turned your passive demo into an Agent. Try asking it about your own pricing."*
5.  They experience the magic instantly.

---

## 8. The Investor Pitch (The "Why Now")

> "We are drowning in video content, but starving for answers.
>
> In a world of instant gratification, a 10-minute video is a friction point, not an asset. Buyers want the information *now*, or they leave.
>
> **Siara** is the bridge between the richness of video and the speed of chat. We are building the interface for the next generation of B2B buying."

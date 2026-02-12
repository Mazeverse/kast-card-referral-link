const REF_LINK = "https://go.kast.xyz/VqVO/V3L91QTU";

const statusEl = document.getElementById("status");
const linkTextEl = document.getElementById("linkText");
const copyBtn = document.getElementById("copyBtn");
const shareBtn = document.getElementById("shareBtn");

function setStatus(msg) {
  statusEl.textContent = msg;
  if (!msg) return;
  clearTimeout(window.__statusTimer);
  window.__statusTimer = setTimeout(() => statusEl.textContent = "", 2200);
}

async function copy(text) {
  try {
    await navigator.clipboard.writeText(text);
    setStatus("Copied!");
  } catch (e) {
    // Fallback
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    setStatus("Copied!");
  }
}

copyBtn.addEventListener("click", () => copy(REF_LINK));

shareBtn.addEventListener("click", async () => {
  const data = {
    title: "Kast Card Referral Link",
    text: "Kast Card invite link",
    url: REF_LINK
  };
  try {
    if (navigator.share) {
      await navigator.share(data);
    } else {
      await copy(REF_LINK);
      setStatus("Sharing not supported — link copied instead.");
    }
  } catch (e) {
    // user canceled or not supported
  }
});

// Make the code box clickable
linkTextEl.addEventListener("click", () => copy(REF_LINK));


const REF_LINK = "https://go.kast.xyz/VqVO/V3L91QTU";
const statusEl = document.getElementById("status");

async function copy(text) {
  try {
    await navigator.clipboard.writeText(text);
    statusEl.textContent = "Copied!";
    setTimeout(() => statusEl.textContent = "", 2000);
  } catch {}
}

document.getElementById("copyBtn").addEventListener("click", () => copy(REF_LINK));
document.getElementById("linkText").addEventListener("click", () => copy(REF_LINK));

document.getElementById("shareBtn").addEventListener("click", async () => {
  if (navigator.share) {
    await navigator.share({
      title: "Kast Card Referral Link",
      url: REF_LINK
    });
  } else {
    copy(REF_LINK);
  }
});

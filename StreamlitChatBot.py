import streamlit as st
import requests

# --- CONFIGURE YOUR ENDPOINTS HERE ---
ASK_API_URL = "https://en8ukd2yjc.execute-api.us-west-2.amazonaws.com/ask/Ask-Claude"
KB_API_URL = "https://kg85fwrrkc.execute-api.us-west-2.amazonaws.com/kbfetch/Fetch-KB"
st.title("Tutoring Transcript RAG Workflow")

# --- Load Knowledge Base ---
@st.cache_data
def load_kb():
    try:
        resp = requests.get(KB_API_URL)
        resp.raise_for_status()
        return resp.json()
    except Exception as e:
        st.error(f"Failed to load knowledge base: {e}")
        return []

kb = load_kb()

# --- Show Knowledge Base ---
with st.expander("Show Metaskill Definitions"):
    for item in kb:
        st.markdown(f"**{item.get('label', 'No Label')}**: {item.get('definition', '')}")

# --- Transcript Input ---
transcript = st.text_area("Paste transcript here", height=200)

# --- Chat Section ---
st.subheader("Ask a Question")
question = st.text_input("Your question")

if st.button("Ask Claude"):
    if not question or not transcript:
        st.warning("Please enter both a transcript and a question.")
    else:
        with st.spinner("Asking Claude..."):
            payload = {
                "question": question,
                "transcript": transcript,
                "kbId": "MJILUUVH3X"
            }
            try:
                resp = requests.post(ASK_API_URL, json=payload)
                resp.raise_for_status()
                answer = resp.json().get("answer", "No answer returned.")
                st.success("Claude's answer:")
                st.write(answer)
            except Exception as e:
                st.error(f"Error: {e}") 
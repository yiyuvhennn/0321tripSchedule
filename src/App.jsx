import { useState } from "react";

export default function MobileItineraryPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const itinerary = [
    {
      time: "12:00 - 12:30",
      title: "從苗栗縣竹南鎮接公主👸",
      note: "中午先出發接公主👸，確認集合地點、上車時間與導航路線。",
      tag: "出發",
      image: "/images/竹南後龍.png",
      details: [
        "先確認公主準備好再出門",
        "駕馬奔騰，前往仁德",
        "車程：22分鐘。"
      ],
    },
    {
      time: "12:30 - 14:00",
      title: "開車前往亞洲大學",
      note: "抵達後先找停車位，開始找教室聽講座，確認講座時間與地點。",
      tag: "移動",
      image: "/images/亞洲大學.png",
      details: [
        "我要在車上跟你吵架！",
        "車程：60分鐘。"
      ],
    },
    {
      time: "14:00 - 16:00",
      title: "亞洲大學聽講座",
      note: "聽完講座後可以在校園裡逛逛，找個地方吃下午茶，拍照打卡。",
      tag: "下午",
      image: "/images/亞大.jpg",
      details: [
        "坐牢聽課，不能睡覺！",
        "校園逛逛"
      ],
    },
    {
      time: "16:00 - 17:00",
      title: "前往谷關露泉渡假溫泉館",
      note: "從亞洲大學開車前往谷關，確認路況與停車資訊。",
      tag: "移動",
      image: "/images/亞洲谷關.png",
      details: [
        "我要繼續在車上跟你吵架！",
        "車程：60分鐘。"
      ],
    },
    {
      time: "17:00 - 19:30",
      title: "現場等候預約",
      note: "谷關露泉沒有提供線上預約，必須現場等候，先去附近逛逛吃個晚餐再回來等候。",
      tag: "晚餐",
      image: "/images/溫泉老街.jpg",
      details: [
        "地址：424臺中市和平區東關路一段溫泉巷17號",
        "逛老街、吃晚餐、拍照打卡",
      ],
    },
    {
      time: "19:30 - 21:30",
      title: "谷關露泉泡湯",
      note: "放鬆身心，享受溫泉的療癒!",
      tag: "泡湯",
      image: "/images/谷關.webp",
      details: [
        "預估用餐時間 2 小時。",
        "半開放 花費 2000 元。",
        "室內 花費 1500 元"
      ],
    },
  ];

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={styles.page}>
      <div style={styles.phone}>
        <header style={styles.header}>
          <div>
            <p style={styles.smallLabel}>MOBILE ITINERARY</p>
            <h1 style={styles.title}>台中一日行程表</h1>
            <p style={styles.subtitle}>竹南 → 後龍 → 逛街 → 日落 → 晚餐 → 泡腳</p>
          </div>
          <div style={styles.badge}>
            <div style={styles.badgeTop}>行程</div>
            <div style={styles.badgeBottom}>1 Day</div>
          </div>
        </header>

        <main style={styles.main}>
          <section style={styles.heroCard}>
            <p style={styles.heroLabel}>PASSENGER INFO</p>
            <h2 style={styles.heroTitle}>今日乘客：33陳琳</h2>
            <p style={styles.heroText}>
              年齡20 身高158 不想談戀愛的公主，喜歡拍照自戀
              ，討厭無聊的行程安排和車程太久的移動。希望今天能有個愉快的約會！
            </p>
            <img
              src="/images/公主.jpg"
              alt="陳琳"
              style={styles.heroImage}
            />
          </section>

          <section style={styles.list}>
            {itinerary.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <article
                  key={index}
                  style={{ ...styles.card, ...(isOpen ? styles.cardOpen : {}) }}
                  onClick={() => toggleCard(index)}
                >
                  <div style={styles.cardLine}></div>
                  <div style={styles.cardContent}>
                    <div style={styles.cardTop}>
                      <div>
                        <p style={styles.time}>{item.time}</p>
                        <h3 style={styles.cardTitle}>{item.title}</h3>
                      </div>
                      <span style={styles.tag}>{item.tag}</span>
                    </div>

                    <p style={styles.note}>{item.note}</p>
                    <div style={styles.expandHint}>
                      {isOpen ? "點一下收起詳細內容 ▲" : "點一下看詳細內容 ▼"}
                    </div>

                    {isOpen && (
                      <div style={styles.detailBox}>
                        <img
                          src={item.image}
                          alt={item.title}
                          style={styles.detailImage}
                        />
                        {item.details.map((detail, i) => (
                          <p key={i} style={styles.detailText}>• {detail}</p>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </section>
        </main>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f1f5f9",
    display: "flex",
    justifyContent: "center",
    margin: 0,
    fontFamily: "Arial, sans-serif",
  },
  phone: {
    width: "100%",
    maxWidth: "430px",
    minHeight: "100vh",
    backgroundColor: "#fff",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 10,
    backgroundColor: "rgba(255,255,255,0.95)",
    borderBottom: "1px solid #e2e8f0",
    padding: "20px 16px 16px",
    display: "flex",
    justifyContent: "space-between",
    gap: "12px",
  },
  smallLabel: { fontSize: "12px", letterSpacing: "2px", color: "#64748b", margin: 0 },
  title: { fontSize: "28px", margin: "6px 0 4px", color: "#0f172a" },
  subtitle: { fontSize: "14px", color: "#64748b", margin: 0, lineHeight: "1.5" },
  badge: {
    backgroundColor: "#0f172a",
    color: "#fff",
    borderRadius: "16px",
    padding: "10px 12px",
    minWidth: "70px",
    textAlign: "right",
    height: "fit-content",
  },
  badgeTop: { fontSize: "10px", color: "#cbd5e1" },
  badgeBottom: { fontSize: "14px", fontWeight: "bold", marginTop: "4px" },
  main: { padding: "20px 16px 28px" },
  heroCard: {
    backgroundColor: "#0f172a",
    color: "#fff",
    borderRadius: "24px",
    padding: "18px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
  },
  heroLabel: { fontSize: "12px", letterSpacing: "2px", color: "#cbd5e1", margin: 0 },
  heroTitle: { fontSize: "20px", margin: "10px 0 8px" },
  heroText: { fontSize: "14px", lineHeight: "1.8", color: "#e2e8f0", margin: 0 },
  heroImage: {
    width: "100%",
    borderRadius: "14px",
    marginTop: "14px",
    objectFit: "cover",
  },
  list: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  card: {
    position: "relative",
    backgroundColor: "#fff",
    border: "1px solid #e2e8f0",
    borderRadius: "22px",
    padding: "16px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
    overflow: "hidden",
    cursor: "pointer",
  },
  cardOpen: {
    boxShadow: "0 10px 24px rgba(15,23,42,0.10)",
  },
  cardLine: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "6px",
    height: "100%",
    backgroundColor: "#0f172a",
  },
  cardContent: { paddingLeft: "10px" },
  cardTop: { display: "flex", justifyContent: "space-between", gap: "12px" },
  time: { fontSize: "26px", fontWeight: "bold", margin: 0, color: "#0f172a" },
  cardTitle: { fontSize: "16px", margin: "6px 0 0", color: "#1e293b" },
  tag: {
    backgroundColor: "#f1f5f9",
    color: "#475569",
    borderRadius: "999px",
    padding: "6px 10px",
    fontSize: "12px",
    height: "fit-content",
    whiteSpace: "nowrap",
  },
  note: {
    fontSize: "14px",
    color: "#475569",
    lineHeight: "1.8",
    marginTop: "12px",
    marginBottom: 0,
  },
  expandHint: {
    marginTop: "12px",
    fontSize: "13px",
    fontWeight: "bold",
    color: "#334155",
  },
  detailBox: {
    marginTop: "12px",
    padding: "12px",
    backgroundColor: "#f8fafc",
    borderRadius: "14px",
  },
  detailImage: {
    width: "100%",
    borderRadius: "12px",
    marginBottom: "12px",
    objectFit: "cover",
  },
  detailText: {
    margin: "0 0 8px",
    fontSize: "14px",
    color: "#475569",
    lineHeight: "1.7",
  },
};
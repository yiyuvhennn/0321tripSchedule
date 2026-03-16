import { useState } from "react";

export default function MobileItineraryPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const itinerary = [
    {
      time: "13:00 - 13:30",
      title: "從苗栗縣竹南鎮接公主",
      note: "中午先出發接公主，確認集合地點、上車時間與導航路線。",
      tag: "出發",
      image: "/images/公主.jpg",
      details: [
        "先確認公主準備好再出門",
        "駕馬奔騰，前往仁德",
        "車程：22分鐘。"
      ],
    },
    {
      time: "13:30 - 14:30",
      title: "開車前往台中三井 Outlet",
      note: "抵達後先找停車位，開始逛街、吃點心、拍照。",
      tag: "移動",
      image: "/images/仁德三井.png",
      details: [
        "我要在車上跟你吵架！",
        "車程：22分鐘。"
      ],
    },
    {
      time: "14:30 - 17:30",
      title: "台中三井 Outlet 逛街",
      note: "下午自由逛街購物，可以安排休息時間，順便等待傍晚看日落。",
      tag: "下午",
      image: "/images/三井.jpg",
      details: [
        "下午茶、咖啡、拍照點。",
        "我要買鞋子！"
      ],
    },
    {
      time: "17:30 - 18:30",
      title: "看日落",
      note: "前往高美濕地找適合的位置欣賞日落，稍作休息後再出發吃晚餐。",
      tag: "黃昏",
      image: "/images/高美濕地日落.jpg",
      details: [
        "預計停留 30～40 分鐘。",
        "拍照、散步。"
      ],
    },
    {
      time: "18:30 - 19:30",
      title: "前往台中西屯｜耕讀園 市政店",
      note: "從三井 Outlet 開車前往西屯，建議先確認路況與停車資訊。",
      tag: "晚餐",
      image: "/images/三井耕讀園.png",
      details: [
        "地址：407臺中市西屯區市政路109號",
        "已訂位，19:30",
        "如果你想改，請傳訊息給我"
      ],
    },
    {
      time: "19:30 - 21:00",
      title: "耕讀園 市政店 晚餐",
      note: "晚餐時間可以放慢節奏，好好吃飯聊天。",
      tag: "用餐",
      image: "/images/耕讀園.webp",
      details: [
        "預估用餐時間 1.5 小時。",
        "預估花費 1,200 元。",
        "如果有特別想吃的菜，可以提前跟我說。"
      ],
    },
    {
      time: "21:00 - 21:30",
      title: "前往台中霧峰｜轉角遇見你泡腳",
      note: "晚餐後出發去泡腳，當作今天最後的放鬆行程。",
      tag: "夜間",
      image: "/images/耕讀園轉角遇見你.png",
      details: [
        "地址：413006臺中市霧峰區萊園路45-1號",
        "我要繼續在車上跟你吵架！",
        "車程：30分鐘。"
      ],
    },
    {
      time: "21:30 - 23:30",
      title: "泡腳放鬆",
      note: "結束一天行程，休息放鬆，之後再安排返程。",
      tag: "收尾",
      image: "/images/泡腳.webp",
      details: [
        "預估時間 2 小時。",
        "包廂兩人一小時 $600",
        "室外 $200 / 人。"
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
              年齡20 身高158 不想談戀愛的公主，喜歡吃甜食、逛街、拍照，
              討厭無聊的行程安排和車程太久的移動。希望今天能有個愉快的約會！
            </p>
            <img
              src="/images/IMG_0385.jpg"
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
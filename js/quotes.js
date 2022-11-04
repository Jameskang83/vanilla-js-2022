
const quotes = [
    {
        rule: "나의 투자 원칙 1 :",
        quote: " 아침 9:30분 ~ 10:30분 사이에만 트레이딩(동부기준) 한다.",
    },
    {
        rule: "나의 투자 원칙 2 :",
        quote: "하루 목표 금액은 100불, 하루 손절 금액은 50불을 지키자.",
    },
    {
        rule: "나의 투자 원칙 3 :",
        quote: "목표를 달성하거나 손절 50불나면 그날은 트레이딩 끝. 뒤돌아보지마자!",
    },
    {
        rule: "나의 투자 원칙 4 :",
        quote: "목표 vs 손절 비율 2:1 명심하자!",
    },
    {
        rule: "나의 투자 원칙 5 :",
        quote: "10:30분이 지나면 무조건 무포지션으로 관망. 매매에 손이 간다면 코딩 더 하자.",
    },
    {
        rule: "나의 투자 원칙 6 :",
        quote: "로또 포지션 = 시드 증발의 지름길. 오버나잇 포지션 = 자폭이다. 욕심을 버려라!",
    },
    {
        rule: "나의 투자 원칙 7 :",
        quote: "차트분석은 누구나 할수 있다. 하지만 결국 돈버는 사람들은 절제하는 사람들이다.",
    },
    {
        rule: "나의 투자 원칙 8 :",
        quote: "멀리 보고 시장 앞에서 항상 겸손하자.",
    },
];

const rule = document.querySelector("#quote span:first-child");
const quote = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

rule.innerText = todayQuote.rule;
quote.innerText = todayQuote.quote;
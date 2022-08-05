import '../../styleComponent/mainStyle/footer.css'

function Footer(props){
    return(
        <footer className="footer-root">
            <div className="footer-div">
                <img src={props.img} alt="icon" className="footer-logoImg" />
                <div className="footer-category1">
                    <p>OP.GG</p>
                    <a href="https://www.op.gg/about">About OP.GG</a>
                    <a href="https://log.op.gg/about-company/">Company</a>
                    <a href="https://log.op.gg/">Blog</a>
                    <a href="https://www.op.gg/logos">로고 히스토리</a>
                </div>
                <div className="footer-category1">
                    <p>Products</p>
                    <a href="localhost:3000/">리그오브레전드<img src={props.footer} alt="icon" /></a>
                    <a href="https://duo.op.gg/">Duo<img src={props.footer} alt="icon" /></a>
                    <a href="https://qwer.gg/ko">QWER (이스포츠 전적)<img src={props.footer} alt="icon" /></a>
                    <a href="https://valorant.op.gg/">발로란트<img src={props.footer} alt="icon" /></a>
                    <a href="https://pubg.op.gg/">배틀그라운드<img src={props.footer} alt="icon" /></a>
                    <a href="https://overwatch.op.gg/">오버워치<img src={props.footer} alt="icon" /></a>
                    <a href="https://er.op.gg/">이터널 리턴<img src={props.footer} alt="icon" /></a>
                    <a href="https://talk.op.gg/">톡피지지<img src={props.footer} alt="icon" /></a>
                    <a href="https://op.gg/desktop/">데스크톱<img src={props.footer} alt="icon" /></a>
                </div>
                <div className="footer-category">
                    <p>Apps</p>
                    <a href="https://play.google.com/store/apps/details?id=gg.op.lol.android&referrer=utm_source%3Dadblock%26utm_medium%3Dbanner">OP.GG Android App<img src={props.footer} alt="icon" /></a>
                    <a href="https://apps.apple.com/kr/app/op-gg-%EC%98%A4%ED%94%BC%EC%A7%80%EC%A7%80/id605722237">OP.GG iOS App<img src={props.footer} alt="icon"/></a>
                    <a href="https://play.google.com/store/apps/details?id=gg.ifi.playtime">IFI.GG Android App</a>
                    <a href="https://apps.apple.com/kr/app/id1455300411">IFI.GG iOS App</a>
                </div>
                <div className="footer-category">
                    <p>Resources</p>
                    <a href="https://www.op.gg/policies/privacy" style={{ fontWeight: "bold" }}>개인정보처리방침</a>
                    <a href="https://www.op.gg/policies/agreement">이용약관</a>
                    <a href="https://opggkr.helpscoutdocs.com/collection/121-league-of-legends">도움말</a>
                    <a href='/'>문의/피드백</a>
                </div>
                <div className="footer-category" style={{ marginLeft: "70px", marginRight: "150px" }}>
                    <p>More</p>
                    <a href='/'>제휴</a>
                    <a href='/'>광고</a>
                    <a href="https://www.opgg.team/">채용</a>
                </div>
            </div>
            <div className="footer-text">
                <span>© 2012-2022 OP.GG. OP.GG isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.</span>
                <img src="https://s-lol-web.op.gg/images/icon/icon-logo-twitter.svg?v=1658292954524" alt="icon" />
                <img src="https://s-lol-web.op.gg/images/icon/icon-logo-instagram.svg?v=1658292954524" alt="icon" />
                <img src="https://s-lol-web.op.gg/images/icon/icon-logo-facebook.svg?v=1658292954524" alt="icon" />
            </div>
        </footer>
    )
}

export default Footer;
import '../styleComponent/footer.css'

function Footer() {
    return (
        <footer>
            <div className='letter'>
                <div className="spans">
                    <span>About OP.GG</span>
                    <span>로고 히스토리</span>
                    <span>개인정보 처리방침</span>
                    <span>도움말</span>
                    <span>제휴</span>
                    <span>광고</span>
                    <span>문의/피드백</span>
                    <span>채용</span>
                </div>
                <div className='copyright'>
                    <p>© 2012-2022 OP.GG. OP.GG isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of</p>
                    <p>Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
import '../../styleComponent/preCommunity.css'

function Community(){   

    const cEl = document.querySelectorAll('.community--content');

    const changeStyle = (index, flag) => {
        if(flag){
            cEl[index-1].style.color = "white"
            return ;
        }
        
        return ;
    }

    for(let node of cEl){
        node.addEventListener("mouseenter", ()=>{
            changeStyle(Number(node.dataset.columns), true);
        })
        node.addEventListener("mouseleave", ()=>{
            changeStyle(Number(node.dataset.columns), false);
        })
    }


    return(
        <div className={"community"}>
            <span className={"community--title"}>OP.GG Talk 인기글</span>
            <div className={"content-grid"}>
                <a className={"community--content"} href="localhost:3000" data-columns="1">
                    <p className={"community--content--index"}>1</p>
                    <img src={"test.jpg"} className={"community--content--thumbnail"} alt={"icon"}/>
                    <div className={"content"}>
                        <div className={"community--content--title"}>
                            <span href={"/"} className={"community--content--title--text"}>풍경 지린다</span>
                            <span className={"community--content--commentCount"}>[12]</span>
                        </div>
                        <div className={"community--content--state"}>
                            <span className={"community--content--date"}>2시간 전</span>
                            <span className={"community--content--user"}>Urdr</span>
                        </div>
                    </div>
                </a>
                <a className={"community--content"} href="localhost:3000" data-columns="2">
                    <p className={"community--content--index"}>2</p>
                    <img src={"test.jpg"} className={"community--content--thumbnail"} alt={"icon"}/>
                    <div className={"content"}>
                        <div className={"community--content--title"}>
                            <span href={"/"} className={"community--content--title--text"}>풍경 지린다</span>
                            <span className={"community--content--commentCount"}>[12]</span>
                        </div>
                        <div className={"community--content--state"}>
                            <span className={"community--content--date"}>2시간 전</span>
                            <span className={"community--content--user"}>Urdr</span>
                        </div>
                    </div>
                </a>
                <a className={"community--content"} href="localhost:3000" data-columns="3">
                    <p className={"community--content--index"}>3</p>
                    <img src={"test.jpg"} className={"community--content--thumbnail"} alt={"icon"}/>
                    <div className={"content"}>
                        <div className={"community--content--title"}>
                            <span href={"/"} className={"community--content--title--text"}>풍경 지린다</span>
                            <span className={"community--content--commentCount"}>[12]</span>
                        </div>
                        <div className={"community--content--state"}>
                            <span className={"community--content--date"}>2시간 전</span>
                            <span className={"community--content--user"}>Urdr</span>
                        </div>
                    </div>
                </a>
                <a className={"community--content"} href="localhost:3000" data-columns="4">
                    <p className={"community--content--index2"}>4</p>
                    <img src={"test.jpg"} className={"community--content--thumbnail"} alt={"icon"}/>
                    <div className={"content"}>
                        <div className={"community--content--title"}>
                            <span href={"/"} className={"community--content--title--text"}>풍경 지린다</span>
                            <span className={"community--content--commentCount"}>[12]</span>
                        </div>
                        <div className={"community--content--state"}>
                            <span className={"community--content--date"}>2시간 전</span>
                            <span className={"community--content--user"}>Urdr</span>
                        </div>
                    </div>
                </a>
                <a className={"community--content"} href="localhost:3000" data-columns="5">
                    <p className={"community--content--index2"}>5</p>
                    <img src={"test.jpg"} className={"community--content--thumbnail"} alt={"icon"}/>
                    <div className={"content"}>
                        <div className={"community--content--title"}>
                            <span href={"/"} className={"community--content--title--text"}>풍경 지린다</span>
                            <span className={"community--content--commentCount"}>[12]</span>
                        </div>
                        <div className={"community--content--state"}>
                            <span className={"community--content--date"}>2시간 전</span>
                            <span className={"community--content--user"}>Urdr</span>
                        </div>
                    </div>
                </a>
                <a className={"community--content"} href="localhost:3000" data-columns="6">
                    <p className={"community--content--index2"}>6</p>
                    <img src={"test.jpg"} className={"community--content--thumbnail"} alt={"icon"}/>
                    <div className={"content"}>
                        <div className={"community--content--title"}>
                            <span href={"/"} className={"community--content--title--text"}>풍경 지린다</span>
                            <span className={"community--content--commentCount"}>[12]</span>
                        </div>
                        <div className={"community--content--state"}>
                            <span className={"community--content--date"}>2시간 전</span>
                            <span className={"community--content--user"}>Urdr</span>
                        </div>
                    </div>
                </a>
                <a className={"community--content"} href="localhost:3000" data-columns="7">
                    <p className={"community--content--index2"}>7</p>
                    <img src={"test.jpg"} className={"community--content--thumbnail"} alt={"icon"}/>
                    <div className={"content"}>
                        <div className={"community--content--title"}>
                            <span href={"/"} className={"community--content--title--text"}>풍경 지린다</span>
                            <span className={"community--content--commentCount"}>[12]</span>
                        </div>
                        <div className={"community--content--state"}>
                            <span className={"community--content--date"}>2시간 전</span>
                            <span className={"community--content--user"}>Urdr</span>
                        </div>
                    </div>
                </a>
                <a className={"community--content"} href="localhost:3000" data-columns="8">
                    <p className={"community--content--index2"}>8</p>
                    <img src={"test.jpg"} className={"community--content--thumbnail"} alt={"icon"}/>
                    <div className={"content"}>
                        <div className={"community--content--title"}>
                            <span href={"/"} className={"community--content--title--text"}>풍경 지린다</span>
                            <span className={"community--content--commentCount"}>[12]</span>
                        </div>
                        <div className={"community--content--state"}>
                            <span className={"community--content--date"}>2시간 전</span>
                            <span className={"community--content--user"}>Urdr</span>
                        </div>
                    </div>
                </a>
                <a className={"community--content"} href="localhost:3000" data-columns="9">
                    <p className={"community--content--index2"}>9</p>
                    <img src={"test.jpg"} className={"community--content--thumbnail"} alt={"icon"}/>
                    <div className={"content"}>
                        <div className={"community--content--title"}>
                            <span href={"/"} className={"community--content--title--text"}>풍경 지린다</span>
                            <span className={"community--content--commentCount"}>[12]</span>
                        </div>
                        <div className={"community--content--state"}>
                            <span className={"community--content--date"}>2시간 전</span>
                            <span className={"community--content--user"}>Urdr</span>
                        </div>
                    </div>
                </a>
                <a className={"community--content"} href="localhost:3000" data-columns="10">
                    <p className={"community--content--index2"}>10</p>
                    <img src={"test.jpg"} className={"community--content--thumbnail"} alt={"icon"}/>
                    <div className={"content"}>
                        <div className={"community--content--title"}>
                            <span href={"/"} className={"community--content--title--text"}>풍경 지린다</span>
                            <span className={"community--content--commentCount"}>[12]</span>
                        </div>
                        <div className={"community--content--state"}>
                            <span className={"community--content--date"}>2시간 전</span>
                            <span className={"community--content--user"}>Urdr</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}
export default Community;

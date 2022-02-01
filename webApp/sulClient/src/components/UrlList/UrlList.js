import "./UrlList.css";
//Import components
import Url from './Url';
import ListButton from './ListButton';
import { MdRefresh } from 'react-icons/md';

const UrlList = ({ count, setCount, page, setPage, filteredUrls, setUrls, urls, isDragging, setisDragging, setUpdateUrls }) => {
    // const clickCloseHandler = () => {
    //     if (page < 1) {
    //         return;
    //     }
    //     setPage(page - 1)
    // };
    // const clickMoreHandler = () => {
    //     setPage(page + 1)
    // };
    // const listButton = () => {
    //     console.log(`const listButton = () => {${count}, ${page}}`);
    //     let close = (1 < page) ?
    //         (
    //             <button onClick={clickCloseHandler} className="button-close">close &nbsp;
    //                 <i class="fa fa-angle-up" aria-hidden="true"></i>
    //             </button>
    //         ) :
    //         null;

    //     let more = (count > page * 15) ?
    //         (
    //             <button onClick={clickMoreHandler} className="button-showMore">more &nbsp;&nbsp;
    //                 <i class="fa fa-angle-down" aria-hidden="true"></i>
    //             </button>
    //         ) :
    //         null;
    //     return [close, more];
    // };
    const enableCheckbox = (e) => {
        alert(e.target.checked)
    }
    const refreshOnClick = (e) => {
        setUpdateUrls(val => !val)
    }
    return (
        <div className="url-container">
            <ul className="url-list">
                <div className="div-total-refresh">
                    <h2>Total &nbsp; {count}</h2>
                    <button className="btn-refresh" onClick={refreshOnClick}>
                        <MdRefresh></MdRefresh>
                    </button>
                </div>
                {/* <input type={"checkbox"} className="input-urlList-checkbox" onChange={enableCheckbox} /> Check On */}
                {filteredUrls.map((url, index) => (
                    <Url key={url.url_id}
                        index={index}
                        setUrls={setUrls}
                        urls={urls}
                        url={url}
                        urlID={url.url_id}
                        count={count}
                        setCount={setCount}
                        setisDragging={setisDragging}
                    />
                ))}
                <div className="listButton-wrapper">
                    <ListButton
                        count={count}
                        page={page}
                        setPage={setPage}
                    />
                </div>
            </ul>
        </div>

    );
};

export default UrlList;
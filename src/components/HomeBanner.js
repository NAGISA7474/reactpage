const HomeBanner = () => {
  return(
    <div className="home-banner">
      <div className="our-story">
        <h1 className="our-story-card-title" data-uia="hero-title">映画もドラマも見放題</h1>
        <h2 className="our-story-card-subtitle" data-uia="our-story-card-subtitle">料金は¥０から。いつでもキャンセルできます。</h2>
        <p className="email-form-title">まもなくご視聴いただけます!メールアドレスを入力してメンバーシップを開始、または再開してください。</p>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="メールアドレス" />
          <button className="input-group-button btn-danger text-white">今すぐ始める</button>
        </div>
      </div>
      <div className="shadow"></div>
      <img className="concord-img vlv-creative" src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg"  alt=""></img>
    </div>
  )
}

export default HomeBanner;
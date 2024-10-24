const Banner = () => {
  return(
    <div className="banner">
      <div className="banner__contents">
        <h1 className="banner__title">グリーンブック</h1>
        <div className="banner__buttons">
          <button className="banner__button">再生</button>
          <button className="banner__button">マイリスト</button>
        </div>
        <h1 className="banner__description">
        時は1962年、ニューヨークの一流ナイトクラブ、
        コパカバーナで用心棒を務めるトニー・リップは、
        ガサツで無学だが、腕っぷしとハッタリで家族や周囲に頼りにされていた。ある日...
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </div>
  )
}

export default Banner;
<template>
  <div id="operatingInfo" class="d-flex flex-column align-items-center">
    <h4>參觀資訊</h4>
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col col-12 col-md-5">
          <strong>開放時間</strong>
          <p>週二至週日 09:00~17:00，最後入園時間16:30</p>
        </div>
        <div class="col col-12 col-md-5">
          <strong>休園日</strong>
          <p>星期一及除夕休園，如星期一遇國定假日則照常開園</p>
        </div>
      </div>
    </div>
    <div class="container d-flex flex-column">
      <h4>購票資訊</h4>
      <div id="ticket">
        <p>
          <i class="bi bi-person-fill"></i>全票 40 元
          一般成人且無符合其他優惠條件
        </p>
        <p>
          <i class="bi bi-person-arms-up"></i>半票 20 元 六歲以上未滿十八歲民眾
          （需提供證件查驗）
        </p>
        <p>
          <i class="bi bi-people-fill"></i>團體票 二十人以上團體按門票八折收費
        </p>
        <p>
          <i class="bi bi-clipboard2-heart"></i>免票 符合下列資格描述者
          （需提供證件查驗）
        </p>
        <ol>
          <li>未滿 6 歲兒童 / 本市國民小學(含)以下學童</li>
          <li>年滿 65 歲長輩</li>
          <li>身心障礙者及必要之陪伴者一人</li>
          <li>本市低收入戶</li>
          <li>依法設立之社會福利機構。(需來函申請)</li>
          <li>本市國民小學辦理師生校外教學活動</li>
          <li>
            設籍本市鼓山區登山里、興宗里、光化里、山下里、鼓岩里、綠川里、寶樹里、峰南里、樹德里、河邊里、壽山里、惠安里及
            新民里之居民。
          </li>
          <li>導遊出示交通部觀光署核發之導遊證</li>
          <li>其他依法得予免費者</li>
        </ol>
        <ul>
          <li>符合免費資格者不用預約，當天備妥證件至人工閘門驗證入園</li>
          <li>
            同行者有符合免票資格的孩童或 65
            歲以上長者，線上預約全票或半票時一併點選免費票人數
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";
#operatingInfo {
  h4 {
    color: $themeColor2;
    font-weight: 800;
    margin: 1% 0;
  }
  .container {
    margin: 2% 1%;
    width: 100%;
    div.row {
      margin: 0% 1%;
      div.col {
        background-color: rgba($themeColor3, $opacityValue);
        border-radius: 10px;
        margin: 3% 1%;

        strong {
          font-size: larger;
        }
        p {
          color: $themeColor6;
          text-align: center;
          font-size: larger;
        }
      }
    }
    #ticket {
      background-color: rgba($themeColor3, $opacityValue);
      border-radius: 10px;
      margin: 2% 2%;
      padding: 3%;
      p,
      ol,
      ul {
        text-align: left;
        font-size: larger;
      }
      ul {
        li {
          color: red;
        }
      }
    }
  }
}
</style>

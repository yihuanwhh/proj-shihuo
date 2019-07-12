<div class="page-content">
            <div class="searchList page-route slide-transition">
              <div class="baicai_list">
                <p class="tit">
                  <span> {{this.keywords || this.$route.query}} </span> 相关优惠券
                </p>
                <ul>
                  <li v-for="value in this.list.baicai_list" :key="value.index" >
                    <a :href="value.href">
                      <div class="imgs">
                        <span class="get_imgs">
                          <img :src="value.img" />
                        </span>
                      </div>
                      <div class="price">
                        ￥{{value.price}}
                        <span class="quan">
                          券
                          <s>{{value.quan_price}}元</s>
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
                <p class="more">
                  <!-- <a class="lookmore" :href="('http://m.shihuo.cn/youhui/coupon_more?keywords=').concat(this.$route.query.keywords)">查看更多优惠券 &gt;</a> -->
                  <a class="lookmore" :href="`http://m.shihuo.cn/youhui/coupon_more?keywords=${this.$route.query.keywords}`">查看更多优惠券 &gt;</a>
                </p>
              </div>
              <div class="list_news">
                <p class="tit">
                  <span>{{this.keywords || this.$route.query}}</span> 优惠信息
                </p>
                <ul>
                  <li v-for="prod in this.list.list" :key="prod.id">
                    <a :href="prod.href">
                      <div class="imgs">
                        <span class="get_imgs">
                          <img :src="prod.img_url" alt="">
                        </span>
                      </div>
                      <div class="details_box">
                        <h2>{{prod.title[0]}}</h2>
                        <p class="desc">{{prod.subtitle}}</p>
                        <div class="btm">
                          <div class="bus">
                            商城：{{prod.business}}
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
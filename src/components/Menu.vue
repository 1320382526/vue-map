<template>
  <div class="right_btn_div_v2 tf-menu-box">
    <div
      class="tf_menu_list_div"
      style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
    >
      <div
        class="tf_menu_list_img"
        style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAACfklEQVRYR+2YPYgTQRTH/2/X4jgFQSxUFAu7Szo/esHrTOFmZsjVogiC31pc4a3CIYjnV6Go11yl7IxrEaxOsPejS1IKgqilgkiavSd7JLCXi052J5zhyJZ57//eL/83szu7hBG/aMT5MAZ0nZCTg1LKKQDTzNy3DhExgGWtdasoqAsgSSm/Athlaf5da717qIBKqRlmvgagDGBLWpyZ7xhjrmYbSSm/DQi4Jy3R1Qoh5oloNlOrRUS3oyha6v0j6xxUSs0y83wn8QeAnx3AJ8aYWz2AhUaslDrLzFeA1U26FcDOTt05rfXNbI81gLVabV+SJJ8ArDDzjDEmLjqaPDohxHEiMum0kiQ5EMfx565+DaCU8iSARWZ+Zow5naeJa64Q4jERnWHmU8aYxb6AQogLRHQPwGWt9V3Xpnn0UspLABaY+aIx5v4/AXuT8jQqmts1Z/MCVqvVkud5GsBkUZd6dEta67nMrWd1eRV2UEq5g5nTgttdAT3PS+8SL7XWr4cG6Apl02/+NWhzwDU+dvC/OxgEwX7f9x91Hu6uPOnJ5rnW+unQdvHIA7paZtOPN4nNIVt87KDNIVvc2cGRPyyM/HHLNiLXuPOIXQFs+jGgzSFbfCAHlVLnmPkBgHVv+LYGrnEp5XUAN4jofBRFD/u+diqljjHzMoBWu90+XK/Xf7s2HkRfqVQmJyYm3gOYIqLpKIre9AUMw9BrNpvvABwE0GTmFwB+DdLEIWcbEdUAlAB8LJVKR8IwXOkLmP4YBMFe3/dfATjk0LSI9EOSJCfiOP6SFff9Ppg62Wg0jqaWA/CLdMuhSdIlVS6X32ad+6uDOQpvSKrLF9YNAfwDvQdCR62JruoAAAAASUVORK5CYII=&quot;); background-size: 100%;"
      ></div>
      <div class="tf_menu_list_font unactive">历史</div>
    </div>
    <div
      class="tf_menu_list_div"
      style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
    >
      <div
        class="tf_menu_list_img"
        style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAECklEQVRYR93YXWgcVRQH8P/Jri7VVPMkKFb8etUqYluQYopaDJo8JHMnERGlUqjVIAlKKyoEpfj1ooVaiUVFhJg5NwmYyhKVEotFWhFLSQnYFh+MVIliEWKi7syRAxPZtjuzd3Y32+J9WVhmz/zm7D13z1nCRb7oIvehKtAY8xiAXUT0YhAE7zX7gaoCPc97SXExbDsz720msirQGPMsgNeA/7LdVGQqsKen59aWlpYjADoB9MevmsCmIVOBxphDRHQ0CIInjTGXArDNRiYCjTH3AygCOBWGYfv4+PjchUCmAac0eyJyLYD1tSKHhoZaZmZmthDRWhGZstbuz1JkFYHd3d1X53K5uTAMb9RXAB/WijTG7ATwShlqMzN/7oqsCPR9f4uI9DPz7RrIGJOrFWmMmQKwuQy0i5lfqAtojNlHRGeCIHhmOVA5Mp/PbxgZGfnVZU/6vv+yiJSDHmTmT+sFHgLwLjN/UB4oRu4slUrvTExM/BZn97zqBjBMRDtE5BSACQCDugejKCpaa3W7OK+KX7Ex5gcAjzPzAZdIFTKpZ+c6AEvMvMolRtI1ScDfAdzLzN+mBe/t7b0ziqIfmfnnCkiIyA5r7esrATwNoJuZv04LbozR6nwEQDszn3TZk1mxSRn8HsBAtc1cVjh3rxQyCbhfRL6w1r5Z7YlXGlkR6Hneq0S0hpkfrgY855xseCaTMngfgI8AXMPM4YVEJgH1bDstIg9Zaz9zAa5UJhObBd/3d4vIDcysvaDzavSeTOtmrgNwAsBGZtaD13k1EpnasHqe9wYRbZqfn98wPT1dchae3WDUVTipwK6urtWFQkF7QrbWatuUaTUiky5D0x0ADorIU9ba9zMJAcQN6x4i0r2c+RenKjCuzi4ATERP1Dgbk+d5b6chRWSrtXbfuQlwAsbIBwAERLS3ra3tueHh4X8yZvM8pO/720Rkec7+iZl1vDhrOQNj5G2KBPA3EW0PguBgHchjAO4iom0Abo6i6IS19uO6gPrhzs7OywqFwvNENAjgsIjsWVhY+KRYLP6VhtWCEZGN+mBa5DrChmE4oNNi2ucyZbA8kA5W+Xy+X0QeBXAlgK+I6BvtonVcEJGIiK6Iouh6ALcQ0T0AVumJICJvjY2NfeeS/ZqBy8G1SmdnZ9dFUdSuEP26AKwGcAmAPwDMEdFxEdEx4gAzL7rAlq+pC6jTn7b2i4uLg5OTk39mubHrtXUBjTG/ALgqPt++dL1pluvqBZ7R/Scim6y101lu7Hrt/w/Y19e3plQq3aQZICL9n+VyERkAcFTfy+VyS6Ojo4cBiGuWGnbMdHR0FFpbW+fjKk2MS0RPB0Gwu+nAuDvRYX5tys2XdBTN8gdRwzLYiIxkjfEvk3w3R1LSUyEAAAAASUVORK5CYII=&quot;); background-size: 100%;"
      ></div>
      <div class="tf_menu_list_font unactive">雷达</div>
    </div>
    <div
      class="tf_menu_list_div"
      style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
    >
      <div
        class="tf_menu_list_img"
        style="background-image: url(&quot;data:image/png;base64,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&quot;); background-size: 100%;"
      ></div>
      <div class="tf_menu_list_font unactive">云图</div>
    </div>
    <div
      class="tf_menu_list_div"
      style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
    >
      <div
        class="tf_menu_list_img"
        style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAACi0lEQVRYR+2YPWgUQRTH/7N766ogKFyjKApKQDkFUfwAiyOVFjnPJe/uiMQiERTEWsurbSwkIhJjIUa4t/EjV6TRysrCwiKVoJ0YFAXjx53nzpOBOxCR292sxEFuumXex2/+b/btzCpYPpTlfBgAJqnQyMjIet/3xx3H+SQij5n5Xc/PCgVHR0fPKaVudKG+icilMAyvmWcrAIMg2O667lUAhwFsMWAiMhGG4W0rAHvlJKI1AKYBjAN4C2CrVYAGdGxsbFOn03kPwNFaF6wDJCIXwBcAvtb6iI2Ak90yf2+32/lYQCI6BmBXknaRxUYp5YnIQQBnTXmVUtcbjcaFvoClUmmD7/sfARjZV3M8abVapWaz+TVOQUVEUwD2rAadiCwBmC8UCvfq9bq2pg/2W3ycgqshXN8cA8CsJbBfQSI6pJQ6r7V2sq42oX9kehwzP09ib9rIXfMJTGL8F23uMPOZJPFUtVodEpFJEfGTOGS1UUq1oyianpube5kklv17MMkq/qXNQMGs6v8/ChLROgCPAAz9QZUfAK4w800zV6lUZkRkOKV6AuANgIetVmvKHLVSnWZqtdqOKIpe9bkJPmDmwAQlInOvzacE/NX8BYBhZv6QqsREdEApte33xFprUUo9NQHNnLlG5nK5/WkBRWQfgMsATLVmmfl0KsC0CVdiT0SnANwHoD3Pi7+TrCRJFp96ve4sLi5+Nio6jnPUOgWDINjsuq55WaC13m0VYLlc3uh53iyAEwBeM/NOKwCr1WpBaz0DYC+Atd0tcpKZ560ArFQqEyJyqwu2JCIXwzDkVH0wy8aP8y0Wi7l8Pn/c/B9cXl5+trCw0O75WKFgvwUMAOPKGzdvvYI/AXwkyvSNziFdAAAAAElFTkSuQmCC&quot;); background-size: 100%;"
      ></div>
      <div class="tf_menu_list_font unactive">风场</div>
    </div>
    <div
      class="tf_menu_list_div"
      style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
    >
      <div
        class="tf_menu_list_img"
        style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAC/0lEQVRYR73XvWsUQRjH8e/uEbERC7FSBNHO2ElK8QXFlyAYdipBrrDQzi5qI9hoY+EfIAbBIjwLEc+ACPENFLVQBAURLG0UCxs9zngrE27DOpnZ3dmdc8tk5vZz8/J7nosY86OU2gg8BPZkWXY6TdM7Pq+MfAb7ji3gpkZzh77IsQEN3GfgOnAD6PggxwI0cO+Xl5cPLiwsfFVKnQBSH2RwoIH7AOwXkW/58fBFBgVaztwScExEBsXz64MMBjRwH4ENwBagByRNkUGABu4dcAjQ8fKkLbI10MC9Bg6LyA+9pUqpnQXkXRE5aUZV1Xa3AlrOnBIRfUtXnxFyKcuyS66QLkM2Bhq478Am4BcwLSKPishut7t+bm6uXxb0LmQjoJlzExMTeweDwWwURbMuZJ0qZEN6A00ccCDPuSRJroVGegEN3G9gu4h8Ka5OIGQXuAUMawMtF0K7rBnXBmmmQi2gOWk4HJ6N41iAHSGRtsiqBLpybmZmZmun09FBXAsZx/Hu+fl53dVYH9d7SoHGpE/AVB7C+i0F5LYsy/alafrCfLvebv23NE0v+OL0eCfQcuasGTdCTorIgzpRYqkkecetm9p/KpETaEZJlmWLbePDhi8rk/n4NSvoyjmllN6iq22C2CiBpStnBRq4N8ARo9kMgqyzcmuAljP3rN/vH+31ej+Nb94K6YNbPYPGpJejZnMX8Ljf70+HQvriVoC2ScA6QHckk6GQTXA58JXON+Dt6AdO3mxuLiAXRWTaEhH5dl8RkctNcq4qmvQK/gFi4IyI3DTOm0beBy6aPV4+LkkSHdC6onhViCrY6iVJkuRUFEW3AQ3VP27u1Z1cNa7pthY/dyUHx4EMgfunkoREhsKtKXUhkCFx1lrcBhka52wWmiCVUvmN15H1HDhebM2qLpTr/852ywc5wpUGe3Bg3ds9Tpxzi4vftmwlx42rBXSt5P/A1QZakOeA82XNRNMzZ86r/FXn2G5du/VjbcdC4bxWMH9p4Uw+tfWKIXH6s/4COKp6cNC6V4UAAAAASUVORK5CYII=&quot;); background-size: 100%;"
      ></div>
      <div class="tf_menu_list_font unactive">测距</div>
    </div>
    <div
      class="tf_menu_list_div"
      style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
    >
      <div
        class="tf_menu_list_img"
        style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAACHUlEQVRYR+1YQWgTQRR9syFB6KnBs1KVogf1ILQW6bEFD73lbyCSgwg5exI8CR56qKdegxehwSw/mxyiFDy3hVIo2B5rS3uNeFHQhSUzktKU7SablEwGNrBznP3v/cf7zP75IxDzJWKuD4lA3QpNloPFYnHK87x1AEsAzizLeu04zr6uCzr4Kw4S0UcArwKELc/zZprN5t/uXqlUSrdarSmdpIOw6XT6DzO3uzFhgacAbocIFpl5q7tHRP1ixql3h5mfRQnsCLn8CEC12+2Zer1+1gXYtv1JKfV4nIpCXN+Y+U2UwAUAXwFMXwS8Z+Z3BsUMpe45xYVCYdr3/Xkp5bHrukdDGQwHTNZvxrAZI9EnDo5kWwCUODh2B/P5/FMp5bJS6jSbzX4ul8u+bhId/JUS53K5F0KIjQDhF2Ze0Umgiw334gMAD0Okj5j5MNCL1wDM6iYegN9m5g9Rre4HgLtBsGVZc47j7AUE/gRw06DAA2a+7PXhEr8VQqwGkn8H8CR4/SGiLIBbpgRmMpmTSqXyu6+DAIRt2y+VUs+FECe+7681Go1fpsRchzf5D17HpUExiYOJg7oO6OIn68pPRPEemoioZ+xMpVJ3qtVqZxY+Xxe3nfu6pYvCSyn3Xdft3AnO1yiD+z8AN0wJBHDMzPeiBA59+iCivBDigSmBUsrdWq222Vdg7B+PTLmiw5u0Oh33ek6xLpkJfOxL/B+tAMYpHnW2WgAAAABJRU5ErkJggg==&quot;); background-size: 100%;"
      ></div>
      <div class="tf_menu_list_font unactive">图例</div>
    </div>
    <div
      style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
    >
      <div class="tf_menu_list_img refresh"></div>
      <div class="tf_menu_list_font unactive">刷新</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.right_btn_div_v2 {
  z-index: 1000;
  text-align: center;
  padding: 5px 3px;
  font-size: 15px;
  position: absolute;
  right: 5px;
  top: 40px;
  width: 40px;
  border-radius: 5px;
}
.tf-menu-box {
  background-color: rgba(221, 235, 253, 0.7);
  border: 1px solid hsla(0, 0%, 73.3%, 0.7);
  color: #6a6464;
}
div {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.right_btn_div_v2 .tf_menu_list_div {
  margin-top: 3px;
  padding-bottom: 5px;
  width: 40px;
  height: 38px;
  border-bottom: 1px solid hsla(0, 0%, 73.3%, 0.7);
}
.right_btn_div_v2 .tf_menu_list_img {
  margin: 0 auto;
  width: 22px;
  height: 22px;
  background-repeat: no-repeat;
}
.right_btn_div_v2 .tf_menu_list_font {
  font-size: 12px;
  letter-spacing: 2px;
  text-align: center;
  padding-left: 2px;
  margin: 2px 0;
}
.refresh {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAJFBMVEVHcExmZmZlZWVmZmZlZWVmZmZmZmZmZmZmZmZmZmZmZmZmZmaUsPQ2AAAAC3RSTlMA2gvAHfGmTzOIZ8OuyAsAAAIWSURBVEjH7Va/S8NAFI4xatTFH8UlS8VF7KJVOtilHRTURUFRySIWUewSHATpokIXXbQoCi6iIIiLUVPbfv+c79La5NJLeouTfUN7Ob5+773vfbmronTi/8bka242dZdpB1NfTLBw9qNx2i1+YzuS9AFebMfDcX0uYm3YcL83w4H9VNzhOS2W9xhyNwJoPzWWxwS0Q8tUT6zmepGQW1KCnlEdpzJANQ+sS1EOUJVxKeQbsCNL+S1nkHxLbvVcCBwHHvmdolhbGukQt6GbiIXk5osshglxiU/OhcwtSRGwG/ATZJlVPuPiIq0AoZhSNf2Skwgop1EWUaZ9basGHNTGxeN6wGpzPQEMo0L5ywJgAV9NwjTsBXrMCikvUfEpEEvgg7VU5TDPJfpIkOJazqr/xs4k8M5Ud3hlmGCDBMzW06/Q9FygbtoBjyVdIKVy0/elMgpLrShLB5yEBqNMoELFT/9u9nglc/NKUr6K4Rtal8jJGkNQB/6Z9QYa9ijfeBf0827yUeZ5E+hw4mJKk7cVmcQSUwZdlfcUCFAGfFoQ6VOn5G3aJbQOowwYfwDCIhXt9SiwY2BE7vAohORuid6WwyPs1DRQk6MsylLSq16VbQdzcpQmnJL3dBd9Xdw01lMGriKvC8yzo1djd/F0OKXuumo0NeNe2VZUmWnvEp6PbEi/bsDs+3a9X+Q2sDHW/i9FJzrxF/EDHZoDhMDEWSgAAAAASUVORK5CYII=);
  background-size: 100%;
}
.tf-menu-box .active {
  color: #499afa;
}
</style>
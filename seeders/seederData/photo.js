const photos = [
  "https://i.picsum.photos/id/1011/600/600.jpg?hmac=EEWEKDR50G0azyhV0K6VHi3QRb45ikqfxRfDtKeQzuw",
  "https://i.picsum.photos/id/182/600/600.jpg?hmac=wVPkGL44ihFNug2qVe9ycwBgmY_oUs8p5lQ_klpS5O0",
  "https://i.picsum.photos/id/72/600/600.jpg?hmac=59xSDoh9stB6jP5z4LxWRMVY4GrKWw1gSGNe6W3qwoo",
  "https://i.picsum.photos/id/1001/600/600.jpg?hmac=RmKSHosLEMCqxbgpuRM5WTfwO8ma1-qEyDARbFr4_uQ",
  "https://i.picsum.photos/id/442/600/600.jpg?hmac=MB1zrrr1eVi9nvIsH0YrCgQCMygJxDsF33KUp_LzJ_o",
  "https://i.picsum.photos/id/371/600/600.jpg?hmac=9nKOTKqQtybe7WlTf5tGcdUfm7E3qy433wGEzji7J5M",
  "https://i.picsum.photos/id/32/600/600.jpg?hmac=ckewNHu6T51jRr3phawDtt5uv8WPFi4kY4veaM2crOA",
  "https://i.picsum.photos/id/516/600/600.jpg?hmac=8D4xYW56w-koa2eKY8hVEku0CWS0JybdRsAdzT2H2eQ",
  "https://i.picsum.photos/id/820/600/600.jpg?hmac=ejPZq7cnibOxtEWwBnDIetBdlXSSBuV165fGsycNy2E",
  "https://i.picsum.photos/id/450/600/600.jpg?hmac=iDiDfbco87zw-mFU4wsfXJ5AND0cyYdIfn0y4ZZ_nPk",
  "https://i.picsum.photos/id/788/600/600.jpg?hmac=O7l_8H0AF78UTvWEQIeqI0-srggKhEN-DYT15nII_0I",
  "https://i.picsum.photos/id/338/600/600.jpg?hmac=LIEhyYn7P6Fkq8NWCjVDYYnidiOrmN0aHb5JyHiVkM8",
  "https://i.picsum.photos/id/581/600/600.jpg?hmac=SZ5ZGezybicn0Pte3FlLQ83B8H75Aqm3ft0pcoEKatg",
  "https://i.picsum.photos/id/718/600/600.jpg?hmac=XqzoCp0qspH20Tgw5roZWtaVx6dpoIgSv6z0IHtMJlc",
  "https://i.picsum.photos/id/958/600/600.jpg?hmac=6aQCup0gPCKR0qMf5SiYoq33H1S9bjrgDM4CWc7YhEs",
  "https://i.picsum.photos/id/631/600/600.jpg?hmac=oZA5Rs1QtuG-yCWiiwc7LKoEBImCPFGXj3b-cZ0_KTk",
  "https://i.picsum.photos/id/871/600/600.jpg?hmac=E_qeuT2wE_VjY0qXbShk7D6u4yCeRA7nHMjWDbAXmRw",
  "https://i.picsum.photos/id/1079/600/600.jpg?hmac=wVp86zwz7Om-vEJsdFJ5vX7eqZ4O_uIwDpkM37Oct9I",
  "https://i.picsum.photos/id/723/600/600.jpg?hmac=SZz9YeQOA-Y2gnBBw9nKsEOs0aKeBk598PPHdvYlLLA",
  "https://i.picsum.photos/id/721/600/600.jpg?hmac=upDMdF3eoHUJ_4alJpah1fvA9oO_mIx2TFnZmwH9zsE",
  "https://i.picsum.photos/id/805/600/600.jpg?hmac=HHttHmXVsB7dhFuTQT7UCSMXMHNUGnTqZG0KnNvVyjY",
  "https://i.picsum.photos/id/783/600/600.jpg?hmac=zpPpcRXoJELFXXp2dyVDwa6dd82RJ7s8v5M_4uEw8vU",
  "https://i.picsum.photos/id/62/600/600.jpg?hmac=_LxgtunXBYXALY49_Bf4n0jSAV15MR-cilGNPDSqIII",
  "https://i.picsum.photos/id/741/600/600.jpg?hmac=FYRuIvSQgBxp5ufoHYijqwyq-GRGjdQSv77hUCDzr7A",
  "https://i.picsum.photos/id/301/600/600.jpg?hmac=fO5DteBMhTxOxazjat7CAJb1gVHCVNirRbEN4GaPPwM",
  "https://i.picsum.photos/id/925/600/600.jpg?hmac=y8VWLvN5AvdzvOFgiA51Uf3Z1Kj929rlYDg2Nlf4eZU",
  "https://i.picsum.photos/id/1043/600/600.jpg?hmac=DsWHLQk4bYsjDQ-1Zf7IrCUkDOARelMQvjlQgsdSPBU",
  "https://i.picsum.photos/id/52/600/600.jpg?hmac=fMmgm1urQ7T9ENcZINKkRaMHnXOh0k9miiM837CO9Vs",
  "https://i.picsum.photos/id/1067/600/600.jpg?hmac=2d9VT4DylzR_0hHCz7MXYWIP7xOswDg689TD4MHCxuk",
  "https://i.picsum.photos/id/905/600/600.jpg?hmac=DvIKicBZ45DEZoZFwdZ62VbmaCwkK4Sv7rwYzUvwweU",
  "https://i.picsum.photos/id/341/600/600.jpg?hmac=r6_Ir4v_QMa5D8dWxx3-ilY_Afop_SP4KpH5nYWWwzQ",
  "https://i.picsum.photos/id/319/600/600.jpg?hmac=hEZpcP7U8fsR-44_zk6uIngOKrQJFQjndw8WXbkrl_A",
  "https://i.picsum.photos/id/424/600/600.jpg?hmac=rXwOwaA4ok8cfSFnPo3t4Cj7nxWJ0RucPCurxcy1oTc",
  "https://i.picsum.photos/id/687/600/600.jpg?hmac=ofT-WyEqsc1Eh4zmI9anx7wSlhLu5nJ0hBh8lGAcaTI",
  "https://i.picsum.photos/id/929/600/600.jpg?hmac=KzmWvXlT5rbmfODuz2iPIAMdmU_wMaywuzFbsQzKUnY",
  "https://i.picsum.photos/id/52/600/600.jpg?hmac=fMmgm1urQ7T9ENcZINKkRaMHnXOh0k9miiM837CO9Vs",
  "https://i.picsum.photos/id/537/600/600.jpg?hmac=jb9j7NRsalqBzVuz963tSeV-c3Ea4eoD134WnbwbWrI",
  "https://i.picsum.photos/id/651/600/600.jpg?hmac=tT3rDoCJ-xLW_pFItEIyo5-6bvn3gsQ6TiziAr-mZQY",
  "https://i.picsum.photos/id/649/600/600.jpg?hmac=vBapr89alDoCykoPXNaJQU5fwKULJqjWVo2YQhFjHXo",
  "https://i.picsum.photos/id/562/600/600.jpg?hmac=yRFPkYmM1YKQ9l0v1tg4_3-dBSqVdHq4cjF5zo6VYAA",
  "https://i.picsum.photos/id/973/600/600.jpg?hmac=rAwBeFfcx_1_w1QhUqciqL1FR7KbhmbAz2lDPXU67QQ",
  "https://i.picsum.photos/id/664/600/600.jpg?hmac=fTQAZsCm-NVlqb9jaqJ-eULtF7L2VvKKOcofUkBM-zA",
  "https://i.picsum.photos/id/572/600/600.jpg?hmac=78Q-TcBoedSQY4TkHP4kWBwcAZ6BIp15Ixd61bKJECY",
  "https://i.picsum.photos/id/864/600/600.jpg?hmac=j1q530cDLbrckxJmU37FlobQudVXYi2EQ_BTakugEAg",
  "https://i.picsum.photos/id/556/600/600.jpg?hmac=uWsuODEMHKAD9UBTNWn7DsaJZQ--YbTBLrQUnACGThs",
  "https://i.picsum.photos/id/902/600/600.jpg?hmac=H0lc8v0lN4V2UD_ThIY3ILuUiGSxuD8tBA5DexuoeS4",
  "https://i.picsum.photos/id/301/600/600.jpg?hmac=fO5DteBMhTxOxazjat7CAJb1gVHCVNirRbEN4GaPPwM",
  "https://i.picsum.photos/id/129/600/600.jpg?hmac=wjKxJv1e0ay9X02WLm4A-3dt_n5wc2UwRP2bnd9YZ-A",
  "https://i.picsum.photos/id/1031/600/600.jpg?hmac=stoN0CoNLzvWXPt6raVodE6IvWP6XISKsbCsvBsTOPo",
  "https://i.picsum.photos/id/283/600/600.jpg?hmac=fuVzVy8_r-MaoJUuxvNggxPq9LfFRJdX0a9ePhQDkI8",
  "https://i.picsum.photos/id/925/600/600.jpg?hmac=y8VWLvN5AvdzvOFgiA51Uf3Z1Kj929rlYDg2Nlf4eZU",
  "https://i.picsum.photos/id/860/600/600.jpg?hmac=g4WPUaqy400ncakemfMXXaifjh3WFIG0qoRH6huwJmY",
  "https://i.picsum.photos/id/216/600/600.jpg?hmac=pOF7MACz0I4xxklyDpzbOzuWNjKjZBQki1JA4ViKciY",
  "https://i.picsum.photos/id/107/600/600.jpg?hmac=-Iree9HQI8zIhC2oSuJoO8GS0t7xtZkHSy3WOCiLG0o",
  "https://i.picsum.photos/id/130/600/600.jpg?hmac=DoqjTb2qtdt74LPacENUaJukVASYr4uFjPKRKbJ1TC4",
  "https://i.picsum.photos/id/1079/600/600.jpg?hmac=wVp86zwz7Om-vEJsdFJ5vX7eqZ4O_uIwDpkM37Oct9I",
  "https://i.picsum.photos/id/1074/600/600.jpg?hmac=Yc-m_3f7vOnfOpgpzHYHMphNik5pfq0g4hXItRz0BN8",
  "https://i.picsum.photos/id/10/600/600.jpg?hmac=AfDiuSgGBi3yaw3eZHRLegETESZcnzZEnIU_r5I8UlU",
  "https://i.picsum.photos/id/107/600/600.jpg?hmac=-Iree9HQI8zIhC2oSuJoO8GS0t7xtZkHSy3WOCiLG0o",
  "https://i.picsum.photos/id/572/600/600.jpg?hmac=78Q-TcBoedSQY4TkHP4kWBwcAZ6BIp15Ixd61bKJECY",
  "https://i.picsum.photos/id/398/600/600.jpg?hmac=VeMnXUrOdZtwpsh_ALJFJoXP9TLUJYC7jpHiEnQWH0g",
  "https://i.picsum.photos/id/581/600/600.jpg?hmac=SZ5ZGezybicn0Pte3FlLQ83B8H75Aqm3ft0pcoEKatg",
  "https://i.picsum.photos/id/68/600/600.jpg?hmac=60uSpmt3bTgoSRxJW78ugK1uwcL-4gaVKm8JtiGZ9_A",
  "https://i.picsum.photos/id/416/600/600.jpg?hmac=Z43W4c5CnSZ2-go5_rYtMwJ1NUiytmW9VNLey3HbY20",
  "https://i.picsum.photos/id/483/600/600.jpg?hmac=T5XunieuUiiipkGT8gJWEe4mYoZnphKcy3LKUfHzirY",
  "https://i.picsum.photos/id/450/600/600.jpg?hmac=iDiDfbco87zw-mFU4wsfXJ5AND0cyYdIfn0y4ZZ_nPk",
  "https://i.picsum.photos/id/139/600/600.jpg?hmac=3EZmMwjXCLKNofsq-K-pSJCVJEMWBkvLm656wzwI8rA",
  "https://i.picsum.photos/id/643/600/600.jpg?hmac=w43TKLHeAAf6Asbkudid64Jy-BGi7SNkMI6GTTRC_CY",
  "https://i.picsum.photos/id/165/600/600.jpg?hmac=Pd1mLUGMCiXe0GJSxF1VQoFUtU28PPgAKsyYk3J_zw4",
  "https://i.picsum.photos/id/77/600/600.jpg?hmac=RlDxta3N3D28rxmvJVQpbbo8apc9g9catCJlibP6oeg",
  "https://i.picsum.photos/id/650/600/600.jpg?hmac=P5FAgQKYHIuhuUmObY3DOz19WrSdM0-mNe5ki8pYS7s",
  "https://i.picsum.photos/id/696/600/600.jpg?hmac=fO-J_Q8g3yNadMZSjhqJ4HgdyznFuSYXznY1Wnxuoms",
  "https://i.picsum.photos/id/1019/600/600.jpg?hmac=ZbYhhnXjv_IzSU9s_7IRToZWrBuExs1-WDoMzm56X5Y",
  "https://i.picsum.photos/id/189/600/600.jpg?hmac=vqjZgwRzy3zD5D66F8oXUUC7VRMfrI7HEtY6mlCvcxA",
  "https://i.picsum.photos/id/47/600/600.jpg?hmac=i1z2be-zMc2FMsHkBw_2LqaoDg0yB25Ll_J8-T9ixo8",
  "https://i.picsum.photos/id/834/600/600.jpg?hmac=-2vXnd-pzAM2eIYGLTYdtI-pkh16PJyIsYkc_gjEJFM",
  "https://i.picsum.photos/id/667/600/600.jpg?hmac=P1jgCgfZFV3iVCTYtXqH37K55twDt7BlkVBG8cvxzb0",
  "https://i.picsum.photos/id/563/600/600.jpg?hmac=Ol4xJBlEHXriPOqXMWyL7r1yMpm9YYGvmiBfAMYNY1o",
  "https://i.picsum.photos/id/936/600/600.jpg?hmac=uOS6EXOJjQdJDadILiXjMe3lRqqWNSVDcbFKLH8YDIo",
  "https://i.picsum.photos/id/889/600/600.jpg?hmac=zYL0e4kerdzG21RnFQzVjVZWhG-7OMiFVnw-x_pga60",
  "https://i.picsum.photos/id/454/600/600.jpg?hmac=jsbs5k8l1XtTj4oSWIZa-8kTL-VfyxwVxRk3NxAJBdI",
  "https://i.picsum.photos/id/626/600/600.jpg?hmac=VpnHVSV-g0QUgZB3CNjIxKu8Bb6IoD0hvCVFaAhr_WM",
  "https://i.picsum.photos/id/260/600/600.jpg?hmac=5QP9_gpfjT5YEKxN0TXrzW71POOKqBnJDHo07dx9Lgg",
  "https://i.picsum.photos/id/431/600/600.jpg?hmac=VQrxUIZ23xQs2M1R8oT7ply1NM8Zdc9mXpwWaKQ0bfg",
  "https://i.picsum.photos/id/131/600/600.jpg?hmac=cske0IBfT5gO9YlGSonI0LwvJjqwDc_erNY2col6iWo",
  "https://i.picsum.photos/id/137/600/600.jpg?hmac=Ir1WziwzD_cFgVsAdiPzlDkdv7qokOBACMdpQ_aLSSQ",
  "https://i.picsum.photos/id/168/600/600.jpg?hmac=ewxq-lFa9WimzlOTZuMkWXS5jIRmYckEXSmO5kWHTGE",
  "https://i.picsum.photos/id/248/600/600.jpg?hmac=aWR44AtPWJbjZRDZh6ZsZTY7J0evT4YEFdudDsfRgQo",
  "https://i.picsum.photos/id/491/600/600.jpg?hmac=Gk_7AYVTNKYhHHchn4fjqHZtNqjFDel4QGlk1E9oX6E",
  "https://i.picsum.photos/id/443/600/600.jpg?hmac=kiOiBya-324dpi7Gll8bbcuIHwAgwRLI1MZZjw28foI",
  "https://i.picsum.photos/id/1072/600/600.jpg?hmac=a8schvBOVW0iuGzhxL-jKpwj2pc4pC4fJtctuxbGoUw",
  "https://i.picsum.photos/id/571/600/600.jpg?hmac=Rv054NyAim_PdRdyYprAShHy4DJn49qWBtIfpP1q7eM",
  "https://i.picsum.photos/id/542/600/600.jpg?hmac=UplkAAxLpYs_zO5a7QtaYBmYraMCqZ1Dda04ofA9ECE",
  "https://i.picsum.photos/id/199/600/600.jpg?hmac=bmjBlnABZbvp-HRKlZNCItl8YN4ElOSa_5rG87a_ldQ",
  "https://i.picsum.photos/id/635/600/600.jpg?hmac=eLDsMWwdMj7Oy8Zy_QEY8xGMKZiC-WvOmbpfATwBPMc",
  "https://i.picsum.photos/id/342/600/600.jpg?hmac=wp1gbOjM-tRUTxBdevA6ImvhYkOKZukQE8bG3-kKEoY",
  "https://i.picsum.photos/id/811/600/600.jpg?hmac=lDGvxVqZTph2jrgdI-9h2jdnzSK_zWKixVx8ay6E6wE",
  "https://i.picsum.photos/id/479/600/600.jpg?hmac=Ya4zzryanMiE6jcYSIGMp8TIh3y6_zJBPoxKb1aP_kk",
  "https://i.picsum.photos/id/796/600/600.jpg?hmac=EWz6VhF5lxLNKxRSsH1aVO5c1Y5XTGE6lpqdFXBkKpU",
  "https://i.picsum.photos/id/439/600/600.jpg?hmac=LC9k_bzrN0NhKRyV62fou3ix3cRFZKNfAyXgxGs6zh8"
]

const productNum = 20;
const photoNumPerProduct = photos.length / productNum;
const photoList = photos.map((url, index) => {
  let productId = Math.ceil((index + 1) / photoNumPerProduct);
  return {
    url,
    productId,
    createdAt: new Date(),
    updatedAt: new Date()
  }
})

// console.log(photoList);

module.exports = { photoList };

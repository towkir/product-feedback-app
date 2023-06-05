<script>
    const productName = 'Frontend Mentor';
    const productSubtitle = 'Feedback Board';
</script>

<div class="product-banner">
    <div class="content">
        <h1>{productName}</h1>
        <p>{productSubtitle}</p>
    </div>
</div>

<style lang="stylus">
  .product-banner
    background radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)
    border-radius 10px
    box-sizing border-box
    padding 24px
    color white
    height 137px
    display flex
    align-items flex-end
    justify-content start
    .content
      h1
        heading-2()
      p
        body-2()
</style>

<script>
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher();
    const productName = 'Frontend Mentor';
    const productSubtitle = 'Feedback Board';

    export let menuOpen = false;
    function toggleBurgerMenu() {
        dispatch('toggleBurgerMenu', !menuOpen);
    }
</script>

<div class="product-banner">
    <div class="content">
        <h1>{productName}</h1>
        <p>{productSubtitle}</p>
    </div>
    <span
        class="burger-menu"
        class:open={menuOpen}
        on:click={() => toggleBurgerMenu()}
    >
        <span class="bun"></span>
        <span class="patty"></span>
        <span class="bun"></span>
    </span>
</div>

<style lang="stylus">
  .product-banner
    background radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)
    border-radius 10px
    box-sizing border-box
    padding 24px
    margin-bottom 24px
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
    .burger-menu
      display none
      height 20px
      flex-direction column
      justify-content space-between
      cursor pointer
      padding 5px 0 5px 5px
      -webkit-tap-highlight-color transparent
      .bun,
      .patty
        display inline-block
        width 24px
        height 4px
        border-radius 2px
        background-color brand-white
        transition-property opacity, transform
        transition-duration 0.2s
        transition-timing-function ease-in-out
      .bun:first-child
        transform-origin top right
      .bun:last-child
        transform-origin bottom right
      &.open
        .patty
          opacity 0
        .bun:first-child
          transform rotate(-45deg)

        .bun:last-child
          transform rotate(45deg)
  @media screen and (max-width: 991px)
    .product-banner
      height auto
  @media screen and (max-width: 690px)
    .product-banner
      position fixed
      top 0
      left 0
      width 100%
      padding 16px 24px
      margin-bottom 0
      border-radius 0
      align-items center
      justify-content space-between
      z-index 5
      .content
        user-select none
      .burger-menu
        display flex
</style>

<script>
    import ProductBanner from "@/components/sidebar/ProductBanner.svelte";
    import Categories from "@/components/sidebar/Categories.svelte";
    import Roadmap from "@/components/sidebar/Roadmap.svelte";
    export let selectedCategory;

    let drawerOpen = false;
    function toggleDrawer(event) {
        drawerOpen = event.detail;
        if (drawerOpen) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.removeAttribute('style');
        }
    }
    function releaseOverflow() { // applied from homepage in mobile view;
        if (drawerOpen) {
            document.body.removeAttribute('style');
        }
    }

    onDestroy(() => {
        releaseOverflow();
    })
</script>

<div class="sidebar-wrapper">
    <ProductBanner menuOpen="{drawerOpen}" on:toggleBurgerMenu={toggleDrawer}/>
    <div class="drawer" class:open={drawerOpen}>
        <Categories selectedCategory="{selectedCategory}" on:categorySelection />
        <Roadmap />
    </div>
</div>

<style lang="stylus">
  .sidebar-wrapper
    width 100%
    max-width 255px
    .drawer
      display contents
  @media screen and (max-width: 991px)
    .sidebar-wrapper
      display flex
      gap 10px
      align-items stretch
      max-width unset
      :global(.product-banner),
      :global(.tag-list),
      :global(.roadmap-wrapper)
        flex 1 1 0
  @media screen and (max-width: 690px)
    .sidebar-wrapper
      display block
      .drawer
        display block
        width calc(100% - 110px)
        height 100%
        padding 24px
        background-color brand-grey
        position fixed
        z-index 10
        right -100%
        top 75px
        transition right 0.3s ease-in-out
        &.open
          right 0
</style>

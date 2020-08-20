export default {
  screen_state:state=>{
    switch(true){
      case state.width>=1920:
        return 'xl'
      case state.width>=1200:
        return 'lg'
      case state.width>=992:
        return 'md'
      case state.width>=768:
        return 'sm'
      case state.width<768:
        return 'xs' 
    }
  }
}

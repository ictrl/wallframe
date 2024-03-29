// reset
// @import '//codepen.io/chrisdothtml/pen/ojLzJK.css'

btn-size = 90px
sites = {
  'facebook': #3B5998
  'twitter': #3CF
  'google': #DC4A38
  'dribbble': #F26798
  'skype': #00AFF0
}

$animate {
  transition: all .35s
  transition-timing-function: cubic-bezier(
    0.310,
    -0.105,
    0.430,
    1.590
  )
}

$btn__inactive {
  
  &:before {
    top: 90%
    left: -110%
  }
  
  .fa {
    transform: scale(.8)
  }
  
  // variants
  for name, color in sites {
    
    &.{name} {
      
      &:before {
        background-color: color
      }
      
      .fa {
        color: color
      }
    }
  }
}

$btn__active {

  &:before {
    top: -10%
    left: -10%
  }

  .fa {
    color: #fff
    transform: scale(1)
  }
}

.social-btns {
  height: btn-size
  margin: auto
  font-size: 0
  text-align: center
  position: absolute
  top: 0
  bottom: 0
  left: 0
  right: 0

  .btn {
    @extends $btn__inactive
    @extends $animate
    display: inline-block
    background-color: #fff
    width: btn-size
    height: btn-size
    line-height: btn-size
    margin: 0 10px
    text-align: center
    position: relative
    overflow: hidden
    border-radius: 28%
    box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.1)
    //overflow bug fix
    opacity: .99

    &:before {
      @extends $animate
      content: ''
      width: 120%
      height: 120%
      position: absolute
      transform: rotate(45deg)
    }

    .fa {
      @extends $animate
      font-size: 38px
      vertical-align: middle
    }

    &:focus,
    &:hover {
      @extends $btn__active
    }
  }
}

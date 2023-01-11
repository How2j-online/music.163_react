import styled from "styled-components";

export const HwPlayerLyricWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 47px 30px 40px 39px;

  .left {
    width: 198px;
    height: 198px;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 130px;
      height: 130px;
      display: inline-block;
    }

    .image_mark {
      background-position: -144px -584px;
    }
  }

  .right {
    width: 414px;

    .hd {
      display: flex;
      align-items: center;

      .song_name {
        font-size: 24px;
        margin-left: 10px;
      }

      .sprite_icon2 {
        width: 54px;
        height: 24px;
        background-position: 0 -463px;
      }
    }

    .author {
      span {
        color: #999;
        margin: 12px 0;
      }
    }

    .album {
      span {
        color: #999;
        margin: 12px 0;
      }
    }

    .button_group {
      display: flex;
      height: 31px;
      margin-top: 20px;
      margin-bottom: 30px;

      a {
        display: inline-block;
        height: 100%;
      }

      a:first-child {
        width: 61px;
        background-position: right -428px;

        i {
          background-position: 0 -387px;
          height: 100%;
          width: 100%;
          padding: 5px;
          display: inline-block;
          font-size: 12px;
          color: #ffffff;

          &:hover {
            background-position: 0 -469px;

            span {
              background-position: -75px -198px;
            }
          }

          span {
            width: 20px;
            height: 18px;
            display: inline-block;
            vertical-align: top;
            margin-right: 3px;
            background-position: -5px -198px;
          }
        }
      }

      a:nth-child(2) {
        width: 31px;
        height: 100%;
        background-position: 0 -1588px;

        &:hover {
          background-position: -40px -1588px;
        }
      }

      a:nth-child(3) {
        background-position: right -1020px;
        padding: 0 4px 0 0;
        height: 100%;
        width: 70px;
        margin-left: 10px;

        &:hover {
          background-position: right -1106px;

          span {
            background-position: 0 -1063px;
          }
        }

        span {
          font-family: simsun, serif;
          display: inline-block;
          width: 100%;
          height: 100%;
          background-position: 0 -977px;
          box-sizing: border-box;
          padding: 7px 0 0 32px;
          color: #333;
        }
      }

      a:nth-child(4) {
        background-position: right -1020px;
        padding: 0 4px 0 0;
        height: 100%;
        width: 70px;
        margin-left: 6px;

        &:hover {
          background-position: right -1106px;

          span {
            background-position: 0 -1268px;
          }
        }

        span {
          font-family: simsun, serif;
          display: inline-block;
          width: 100%;
          height: 100%;
          background-position: 0 -1225px;
          box-sizing: border-box;
          padding: 7px 0 0 32px;
          color: #333;
        }
      }

      a:nth-child(5) {
        background-position: right -1020px;
        padding: 0 4px 0 0;
        height: 100%;
        width: 70px;
        margin-left: 6px;

        &:hover {
          background-position: right -1106px;

          span {
            background-position: 0 -2805px;
          }
        }

        span {
          font-family: simsun, serif;
          display: inline-block;
          width: 100%;
          height: 100%;
          background-position: 0 -2761px;
          box-sizing: border-box;
          padding: 7px 0 0 32px;
          color: #333;
        }
      }

      a:nth-child(6) {
        background-position: right -1020px;
        padding: 0 4px 0 0;
        height: 100%;
        width: 70px;
        margin-left: 6px;

        &:hover {
          background-position: right -1106px;

          span {
            background-position: 0 -1508px;
          }
        }

        span {
          font-family: simsun, serif;
          display: inline-block;
          width: 100%;
          height: 100%;
          background-position: 0 -1465px;
          box-sizing: border-box;
          padding: 6px 0 0 21px;
          color: #333;
        }
      }

    }

    .lyric_group {
      font-size: 12px;
      color: #333;
      font-family: Arial, Helvetica, sans-serif;
      height: 300px;
      overflow: hidden;
      position: relative;

      .lyric_mark {
        position: absolute;
        height: 100%;
        width: 100%;
        overflow: auto;
        z-index: 1;
        scroll-behavior: smooth;

        &::-webkit-scrollbar { // 滚动条整体样式
          height: 18px;
          width: 8px;
          background: transparent;
        }

        &::-webkit-scrollbar-button {
          height: 0;
          width: 0;
          display: none;
        }

        &::-webkit-scrollbar-thumb { // 滚动条滑块
          height: 49px;
          background-color: #c2c2c2;
          border-radius: 8px;
        }

        &::-webkit-scrollbar-track { // 滚动条轨道
          border-radius: 10px;
          background: #ededed;
        }
      }

      .lyric_box {
         transition: ${props => props.scroll ? '0.2s' : '0s'};
      }

      p {
        height: auto;
        line-height: 30px;
        word-break: break-word;
        transition: 0.2s;
      }

      p.active {
        color: red;
        font-size: 16px;
      }
    }
  }
`;
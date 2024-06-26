import {Component} from 'react'
import Header from '../Header'
import TabItem from '../TabItem'
import ImageItem from '../ImageItem'

import './index.css'

class MatchGame extends Component {
  state = {
    score: 0,
    activeTabId: 'FRUIT',
    activeThumbnailId: this.props.imagesList[0].id,
    activeThumbnailUrl: this.props.imagesList[0].thumbnailUrl,
    isGameOver: false,
  }

  onClickTab = tabId => {
    console.log(tabId)
    this.setState({activeTabId: tabId})
  }

  onClickImage = clickedImageId => {
    console.log(clickedImageId)
  }

  render() {
    const {imagesList, tabsList} = this.props

    const {activeTabId, score, isGameOver} = this.state

    const filteredImagesList = imagesList.filter(
      eachObject => eachObject.category === activeTabId,
    )

    return (
      <>
        <Header score={score} />
        <div className="container">
          <img className="thumbnail" src={imagesList[0].thumbnailUrl} />
          <ul className="tabs-list">
            {tabsList.map(eachTabItem => (
              <TabItem
                key={eachTabItem.tabId}
                isActiveTab={activeTabId === eachTabItem.tabId}
                onClickTab={this.onClickTab}
                tabDetails={eachTabItem}
              />
            ))}
          </ul>

          <ul className="images-container">
            {filteredImagesList.map(eachImage => (
              <ImageItem
                key={eachImage.id}
                imageDetails={eachImage}
                onClickImage={this.onClickIMage}
              />
            ))}
          </ul>
        </div>
      </>
    )
  }
}

export default MatchGame

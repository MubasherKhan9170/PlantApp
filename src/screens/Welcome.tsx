import { StyleSheet } from 'react-native'
import React, { Component } from 'react'

import { Block, Text} from '../components'

export default class Welcome extends Component {
  render() {
    return (
      <Block>
        <Text>Welcome</Text>
      </Block>
    )
  }
}

const styles = StyleSheet.create({})
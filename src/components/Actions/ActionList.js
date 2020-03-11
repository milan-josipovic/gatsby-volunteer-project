import React, { Component } from "react"
import styles from "../../css/items.module.css"
import Action from "./Action"
import Title from "../Title"

export default class ActionList extends Component {
  state = {
    actions: [],
    sortedActions: [],
  }

  componentDidMount() {
    this.setState({
      actions: this.props.actions.edges,
      sortedActions: this.props.actions.edges,
    })
  }

  render() {
    return (
      <section className={styles.tours}>
        <Title title="nase" subtitle="akcije" />
        <div className={styles.center}>
          {this.state.sortedActions.map(({ node }) => {
            return <Action key={node.contentful_id} action={node} />
          })}
        </div>
      </section>
    )
  }
}

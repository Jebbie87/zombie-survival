// add to inventory
export function addToInventory(item) {
  return {
    type: 'ADD_TO_INVENTORY',
    item
  }
}

// remove from inventory
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId: postId,
    author: author,
    comment: comment,
  }
}


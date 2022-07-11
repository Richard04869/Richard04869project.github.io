'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var commentSchema = Schema( {
  userId: {type:Schema.Types.ObjectId, ref:'User'},
  username: String,
  descr: String,
  createdAt: Date,
} );

module.exports = mongoose.model( 'CommentItem', commentSchema );


/**
 *
 *  ----------------------------------
 *  Devoweler - v1.0.0
 *  ----------------------------------
 *
 *  Remove the vowels, keep it meta.
 *
 *  https://github.com/kjbrum/devoweler.js
 *  @license Copyright (c) Kyle Brumm <http://kylebrumm.com>
 *
 */

;(function(global) {
    String.prototype.devowel= String.prototype.devowel || function() {
        return this.replace(/[aeiou]/ig,'');
    }
}(window));

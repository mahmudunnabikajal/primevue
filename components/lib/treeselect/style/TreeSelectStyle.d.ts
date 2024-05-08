/**
 *
 * TreeSelect is a form component to choose from hierarchical data.
 *
 * [Live Demo](https://www.primevue.org/treeselect/)
 *
 * @module treeselectstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum TreeSelectClasses {
    root = 'p-treeselect',
    labelContainer = 'p-treeselect-label-container',
    label = 'p-treeselect-label',
    chip = 'p-treeselect-chip',
    pcChipLabel = 'p-treeselect-chip-label',
    dropdown = 'p-treeselect-dropdown',
    dropdownIcon = 'p-treeselect-dropdown-icon',
    panel = 'p-treeselect-overlay',
    treeContainer = 'p-treeselect-tree-container',
    emptyMessage = 'p-treeselect-empty-message'
}

export interface TreeSelectStyle extends BaseStyle {}

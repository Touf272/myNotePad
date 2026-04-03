import Note from '#models/note'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const existing = await Note.query().first()
    if (!existing) {
      await Note.create({
        title: 'My Note',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      })}
    }
}
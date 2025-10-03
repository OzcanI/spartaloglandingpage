// Redirect to the appropriate language page
import { redirect } from 'next/navigation'

export default function Links() {
  redirect('/en/links')
}
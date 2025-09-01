import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-6 text-center">
      <p>© {new Date().getFullYear()} Sarath Chandra. All rights reserved.</p>
    </footer>
  );
}


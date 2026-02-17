from playwright.sync_api import sync_playwright
import time
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Wait for server to be ready
        print("Navigating to http://localhost:5173...")
        try:
            page.goto("http://localhost:5173")
        except Exception as e:
            print(f"Failed to load page: {e}")
            return

        # Wait for hero content
        page.wait_for_selector("#home")

        # Screenshot Hero
        print("Taking Hero screenshot...")
        page.screenshot(path="verification_hero.png")

        # Scroll to Services
        page.locator("#services").scroll_into_view_if_needed()
        time.sleep(1)
        print("Taking Services screenshot...")
        page.screenshot(path="verification_services.png")

        # Scroll to Room Illustrator and interact
        page.locator("#room-design").scroll_into_view_if_needed()
        time.sleep(1)

        # Click a color
        print("Interacting with Room Illustrator...")
        # Find the "Sage Green" button (aria-label="Select Sage Green")
        sage_btn = page.locator('button[aria-label="Select Sage Green"]')
        if sage_btn.is_visible():
            sage_btn.click()
            time.sleep(0.5)
            # Click the back wall
            # The back wall is a rect or polygon. I'll click center of the SVG container?
            # Or use a selector if I can finding it.
            # The SVG has no easy selector for specific walls unless I added classes or IDs.
            # I added `onClick={() => handleWallClick('back')}` to a polygon/rect.
            # Let's just click the center of the svg, which should be the back wall.
            # Use specific locator to avoid the Palette icon
            svg = page.locator('#room-design svg[viewBox="0 0 800 600"]')
            box = svg.bounding_box()
            if box:
                # Click center
                page.mouse.click(box['x'] + box['width'] / 2, box['y'] + box['height'] / 2)
                time.sleep(0.5)

        page.screenshot(path="verification_room.png")

        # Scroll to About
        page.locator("#about").scroll_into_view_if_needed()
        time.sleep(1)
        print("Taking About screenshot...")
        page.screenshot(path="verification_about.png")

        # Scroll to Contact and fill form
        page.locator("#contact").scroll_into_view_if_needed()
        time.sleep(1)
        print("Filling Contact form...")

        page.fill('input[name="name"]', "Test User")
        page.fill('input[name="phone"]', "555-0123")
        page.fill('input[name="email"]', "test@example.com")
        page.click('input[name="painting"]') # Check painting
        page.fill('textarea[name="message"]', "This is a test message.")

        page.screenshot(path="verification_contact_filled.png")

        # Submit
        print("Submitting form...")
        page.click('button[type="submit"]')

        # Wait for success message
        # The mock takes 1.5s
        try:
            page.wait_for_selector("text=Message Sent!", timeout=5000)
            print("Success message appeared.")
        except:
            print("Success message did not appear.")

        page.screenshot(path="verification_contact_success.png")

        browser.close()

if __name__ == "__main__":
    run()

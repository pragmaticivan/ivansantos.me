import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import Comments from '../../components/Comments';
import NavigationBar from '../../components/NavigationBar';
import { genPageMetadata } from '../seo';
import styles from './styles.module.scss';
import ivanDeskSetup from '../../public/images/ivan-desk-setup.jpg';

export const metadata = genPageMetadata({
  title: `Ivan Santos Toolbox 🧰`,
  description: `Ivan Santos Toolbox`,
});

const IndexPage = () => (
  <>
    <header className="header__blog">
      <NavigationBar />
    </header>

    <main className="flex-auto">
      <div className="mt-16 sm:mt-32 sm:px-8">
        <div className="lg:px-18 mx-auto mt-16 w-full max-w-6xl sm:mt-32 sm:px-8">
          <div className="relative px-4 sm:px-10 lg:px-16">
            <div>
              <Image
                src={ivanDeskSetup}
                className="rounded-2xl"
                alt="Ivan Santos Desk Setup"
              />
            </div>
            <div className={clsx('px-8', styles.content)}>
              <h1 className="pb-3 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                Uses
              </h1>
              <p>
                There&apos;s something magical about tools. Whether we&apos;re
                talking equipment for a hobby you practice or devices for your
                profession, researching and learning about new potential
                additions to our toolboxes is an important part of our
                development.
              </p>

              <p>
                Occasionally I&apos;ll get asked about the hardware or software
                I own and use. I decided to create a list of things that help me
                get stuff done—I&apos;ll keep this page updated as my setup
                changes.
              </p>

              <p>
                Most of these links are amazon affiliate links, so I&apos;ll
                support my passion for coffee and adventures if you buy through
                them.
              </p>

              <h2 className="pb-3 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                Desk Setup
              </h2>

              <ul>
                <li>
                  I use 2{' '}
                  <a href="https://amzn.to/44mm1Ov">
                    Samsung Monitors - 28&apos;&apos;
                  </a>
                  . Best developer monitor bang for your buck hands down. Works
                  well if you have a ARM based macbook pro.
                </li>
                <li>
                  My desk is an{' '}
                  <a href="https://www.autonomous.ai/standing-desks/smartdesk-2-home?option_code=Smartdesk2Home-FrameSmartDesk2_DeskFrame.Black%2CModel.Coreframe-Surface_DeskDesign.705x30XLClassic%2CDeskTop.Black">
                    Autonomous SmartDesk Core XL Classic
                  </a>
                  . This desk has been around for a while, but it&apos;s still a
                  great desk. I&apos;ve had it for 5 years now and it&apos;s
                  still going strong.
                </li>
                <li>
                  Everything — Monitors, Ethernet, Hard Drives, Webcam, and
                  Power — is plugged in via a single USB cable and piped into my{' '}
                  <a href="https://amzn.to/3pGeL0N">
                    CalDigit TS3 Plus Thunderbolt 3 Dock (New version available)
                  </a>
                  .
                </li>
                <li>
                  I currently use a{' '}
                  <a href="https://amzn.to/3JQkg3I">
                    2023 16&apos;&apos; Macbook Pro M2 Max with 64 GB ram, 1TB
                    drive
                  </a>
                  .
                </li>
                <li>
                  <a href="https://amzn.to/3XIF96K">
                    TerraMaster F4-422 10GbE NAS
                  </a>{' '}
                  for backups, plex and homebridge.
                </li>
                <li>
                  My favorite keyboard is a{' '}
                  <a href="https://kono.store/products/kira-mechanical-keyboard">
                    Kira Mechanical Keyboard.
                  </a>
                </li>
                <li>
                  <a href="https://amzn.to/3XHpGUy">Magic Trackpad 2</a> - I
                  don&apos;t remember the last time I&apos;ve used a mouse.
                </li>
              </ul>

              <h2>Sound & Video</h2>
              <ul>
                <li>
                  🎧 <a href="https://amzn.to/3pGbUVD">Sony WH-1000XM5</a>
                </li>
                <li>
                  🎧{' '}
                  <a href="https://amzn.to/3XH84YQ">
                    Apple AirPods Pro (2nd Generation)
                  </a>
                </li>
                <li>
                  📷 My webcan is a{' '}
                  <a href="https://amzn.to/44vDJP6">Insta360 Link 4k Webcam</a>,
                  Hands down the best webcam I&apos;ve ever used.
                </li>
                <li>
                  🎤{' '}
                  <a href="https://amzn.to/3NBpBNq">Blue Yeti USB Microphone</a>
                </li>
              </ul>

              <h2>Editor & Terminal</h2>
              <ul>
                <li>
                  <a href="https://code.visualstudio.com">Visual Studio</a> Code
                  is my current editor. I&apos;ve been using it for a few years
                  now and I don&apos;t have any reason to switch. I do use vim
                  for quick edits.
                </li>
                <li>
                  I mainly use <a href="https://iterm2.com/">iTerm2</a>, but
                  have been contemplating a switch to{' '}
                  <a href="https://www.warp.dev">Warp Terminal</a>.
                </li>
                <li>
                  You can see most of my config files over at my{' '}
                  <a href="https://github.com/pragmaticivan/dotfiles">
                    DotFiles
                  </a>{' '}
                  repo.
                </li>
              </ul>

              <h2>App</h2>
              <ul>
                <li>
                  I use <a href="#">Magnet</a> for window management. Sweet!
                </li>
                <li>
                  I&apos;ve been using{' '}
                  <a href="https://www.alfredapp.com/">Alfred</a> for many years
                  and have many workflows but have recently switched over to{' '}
                  <a href="https://www.raycast.com">Raycast</a> which is a very
                  powerful alternative!
                </li>
                <li>
                  <a href="https://lunar.fyi/">Lunar</a> app is one of the best
                  apps I&apos;ve used to manage my monitors.
                </li>
                <li>
                  Get truly powerful control over all the audio on your Mac. I
                  use{' '}
                  <a href="https://rogueamoeba.com/soundsource/">SoundSource</a>{' '}
                  for a superior sound management and redirects.
                </li>
                <li>
                  It’s about time. I use <a href="#">Cron</a> for scheduling.
                </li>
                <li>
                  <a href="https://1password.com/">1Password</a> is my password
                  manager of choice. I&apos;ve been using it for years and
                  that&apos;s usually the first app I install in any new
                  supported device.
                </li>
                <li>
                  I was born in Brazil and I&apos;ve been living in the US for
                  the past 11 years, yet, english doesn&apos;t feel like my
                  first language. I use{' '}
                  <a href="https://www.grammarly.com/">Grammarly</a> to help me
                  with that.
                </li>
                <li>
                  Don&apos;t judge me! I still use Apple Mail app. It&apos;s
                  simple, and straight to the point. Open to suggestions.
                </li>
                <li>
                  <a href="https://affinity.serif.com/en-us/">Affinity Suite</a>{' '}
                  is my go to for all my design needs. I use Affinity Designer
                  and Affinity Photo.
                </li>
              </ul>

              <h2>Changelog</h2>
              <ul>
                <li>2023-07-09 - Initial draft</li>
              </ul>

              <Comments />
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default IndexPage;

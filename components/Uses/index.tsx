import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import lindyComputerImage from '../../public/images/lindy-computer.jpg';

const Uses = () => (
  <div className={styles.uses}>
    <div className={styles.picture}>
      <Image
        src={lindyComputerImage}
        alt="Ivan Santos Jr"
        width={200}
        height={200}
      />
    </div>
    <div className={styles.content}>
      <h2>Uses</h2>
      <p>
        There&apos;s something magical about tools. Whether we&apos;re talking
        equipment for a hobby you practice or devices for your profession,
        researching and learning about new potential additions to our toolboxes
        is an important part of our development.
      </p>

      <p>
        Occasionally I&apos;ll get asked about the hardware or software I own
        and use. I decided to create a list of things that help me get stuff
        done—I&apos;ll keep this page updated as my setup changes.
      </p>

      <h2>Desk Setup</h2>
      <ul>
        <li>
          I use{' '}
          <a href="https://amzn.to/44mm1Ov">
            2 Samsung Monitors - 28&apos;&apos;
          </a>
          . Best developer monitor bang for your buck hands down. Works well if
          you have a ARM based macbook pro.
        </li>
        <li>
          My desk is an{' '}
          <a href="https://www.autonomous.ai/standing-desks/smartdesk-2-home?option_code=Smartdesk2Home-FrameSmartDesk2_DeskFrame.Black%2CModel.Coreframe-Surface_DeskDesign.705x30XLClassic%2CDeskTop.Black">
            Autonomous SmartDesk Core XL Classic
          </a>
          . This desk has been around for a while, but it's still a great desk.
          I've had it for 5 years now and it's still going strong.
        </li>
        <li>
          Everything — Monitors, Ethernet, Hard Drives, Webcam, and Power — is
          plugged in via a single USB cable and piped into my{' '}
          <a href="https://amzn.to/3pGeL0N">
            CalDigit TS3 Plus Thunderbolt 3 Dock (New version available)
          </a>
          .
        </li>
        <li>
          I currently use a 2023 16" Macbook Pro M2 Max with 64 GB ram, 1TB
          drive.
        </li>
        <li>
          <a href="https://amzn.to/3XIF96K">TerraMaster F4-422 10GbE NAS</a> for
          backups, plex and homebridge.
        </li>
        <li>
          My favorite keyboard is a{' '}
          <a href="https://kono.store/products/kira-mechanical-keyboard">
            Kira Mechanical Keyboard.
          </a>
        </li>
        <li>
          Magic Trackpad 2 - I don't remember the last time I've used a mouse.
        </li>
      </ul>

      <h2>Sound & Video</h2>
      <ul>
        <li>
          <a href="https://amzn.to/3pGbUVD">Sony WH-1000XM5</a>
        </li>
        <li>
          <a href="https://amzn.to/3XH84YQ">
            Apple AirPods Pro (2nd Generation)
          </a>
        </li>
        <li>
          My webcan is a{' '}
          <a href="https://amzn.to/44vDJP6">Insta360 Link 4k Webcam</a>, Hands
          down the best webcam I&apos;ve ever used.
        </li>
        <li>
          <a href="https://amzn.to/3NBpBNq">Blue Yeti USB Microphone</a>
        </li>
      </ul>

      <h2>Editor & Terminal</h2>
      <ul>
        <li>
          <a href="https://code.visualstudio.com">Visual Studio</a> Code is my
          current editor. I&apos;ve been using it for a few years now and I
          don't have any reason to switch. I do use vim for quick edits.
        </li>
        <li>
          I mainly use <a href="https://iterm2.com/">iTerm2</a>, but have been
          contemplating a switch to{' '}
          <a href="https://www.warp.dev">Warp Terminal</a>.
        </li>
        <li>
          You can see most of my config files over at my{' '}
          <a href="https://github.com/pragmaticivan/dotfiles">DotFiles</a> repo.
        </li>
      </ul>

      <h2>Productivity</h2>
      <ul>
        <li>
          I use <a href="#">Magnet</a> for window management. Sweet!
        </li>
        <li>
          I've been using <a href="https://www.alfredapp.com/">Alfred</a> for
          many years and have many workflows but have recently switched over to{' '}
          <a href="https://www.raycast.com">Raycast</a> which is a very powerful
          alternative!
        </li>
        <li>
          <a href="https://lunar.fyi/">Lunar</a> app is one of the best apps
          I've used to manage my monitors.
        </li>
        <li>
          Get truly powerful control over all the audio on your Mac. I use{' '}
          <a href="https://rogueamoeba.com/soundsource/">SoundSource</a> for a
          superior sound management and redirects.
        </li>
        <li>
          It’s about time. I use <a href="#">Cron</a> for scheduling.
        </li>
      </ul>

      <h2>Changelog</h2>
      <ul>
        <li>2023-07-09 - Initial draft</li>
      </ul>
    </div>
  </div>
);

export default Uses;

import CommandsList, { Command } from "@/components/commands/list";

const generalCommands: Command[] = [
  { name: "help", description: "Help command" },
  { name: "ping", description: "Shows the ping of the bot" },
  { name: "stats", description: "Shows information about the bot & lavalink" },
  { name: "support", description: "Get the support server link" },
  { name: "uptime", description: "Shows the uptime of the bot" },
  { name: "vote", description: "Get the vote link(s)" },
];

const musicCommands: Command[] = [
  { name: "247", description: "Enable or disable 24/7 feature" },
  {
    name: "autoplay",
    description:
      "Makes the player add random song to queue after current one has ended (Just like youtube's autoplay)",
  },
  { name: "loop", description: "Loop the current song or the queue." },
  {
    name: "lyrics",
    description: "Get lyrics of current song or another song.",
  },
  {
    name: "nowplaying",
    description: "Show information about the current song",
  },
  { name: "pause", description: "Pause the player if it's not" },
  { name: "play", description: "Play any type of song" },
  { name: "player", description: "Music channel/control commands" },
  {
    name: "playlist",
    description: "create a playlist, add songs, and much more",
  },
  { name: "queue", description: "Shows the music queue" },
  { name: "replay", description: "Play the previous song" },
  { name: "resume", description: "Resume the player if it's paused" },
  {
    name: "seek",
    description: "Seek the time of the current playing track to another",
  },
  { name: "shuffle", description: "shuffles the queue" },
  { name: "skip", description: "Skip the current song" },
  { name: "stop", description: "Stops the music client" },
  { name: "unqueue", description: "Remove a song from the queue" },
  {
    name: "volume",
    description: "Changes the default volume to a specified number",
  },
];

const filterCommands: Command[] = [
  { name: "8d", description: "Enable or disable 8D filter" },
  { name: "nightcore", description: "Enable or disable nightcore filter" },
];

export default function CommandsPage() {
  return (
    <CommandsList
      generalCommands={generalCommands}
      musicCommands={musicCommands}
      filterCommands={filterCommands}
    />
  );
}

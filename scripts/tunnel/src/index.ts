import localtunnel from 'localtunnel';
import fs from 'fs';

(async () => {
  const args = process.argv.slice(2);
  const portIndex = args.findIndex(arg => arg === '--port' || arg === '-p');
  // Get the port from the command line argument or use the default value 4943
  const port = portIndex !== -1 ? Number(args[portIndex + 1]) : 4943;

  const tunnel = await localtunnel({ port });

  // The assigned public URL for your tunnel
  // for example, https://abcdefgjhij.localtunnel.me
  console.log(tunnel.url);

  // Check if the .env file exists
  if (!fs.existsSync('.env')) {
    // Create the .env file
    fs.writeFileSync('.env', '');
  }

  // Read the contents of the .env file
  const envContents = fs.readFileSync('.env', 'utf-8');

  // Check if the tunnel variables section exists in the .env file
  const tunnelVariablesStart = '# TUNNEL ENVIRONMENT VARIABLES START';
  const tunnelVariablesEnd = '# TUNNEL ENVIRONMENT VARIABLES END';
  const tunnelVariablesSection = `${tunnelVariablesStart}\nTUNNEL_URL='${tunnel.url}'\n${tunnelVariablesEnd}`;

  if (envContents.includes(tunnelVariablesStart) && envContents.includes(tunnelVariablesEnd)) {
    // Replace the existing tunnel variables section with the updated one
    const updatedEnvContents = envContents.replace(/# TUNNEL ENVIRONMENT VARIABLES START[\s\S]*# TUNNEL ENVIRONMENT VARIABLES END/, tunnelVariablesSection);
    fs.writeFileSync('.env', updatedEnvContents);
  } else {
    // Add the tunnel variables section to the end of the .env file
    fs.appendFileSync('.env', `\n${tunnelVariablesSection}`);
  }

  tunnel.on('close', () => {
    // tunnels are closed
  });
})();

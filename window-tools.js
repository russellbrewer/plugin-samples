// Sample script that adds functions for managing the player's windows

var organiseWindows = function() {
    var left = 0;
    var top = 28;
    var bottom = 0;
    for (var i = 0; i < ui.windows; i++)
    {
        var window = ui.getWindow(i);

        // Ignore sticky windows (e.g. main window and toolbars)
        if (!window.isSticky) {
            window.x = left;
            window.y = top;
            left += window.width;
            bottom = Math.max(bottom, top + window.height);
            if (left >= ui.width)
            {
                left = 0;
                top = bottom;
            }
        }
    }
};

var main = function() {
    context.registerIntent({
        key: 'window-tools.organisewindows',
        title: 'Organises all opened windows',
        shortcut: 'CTRL+SHIFT+O',
        action: organiseWindows
    });
};

return {
    name: 'Window Tools',
    version: '1.0',
    authors: ['OpenRCT2'],

    // Our script does not affect the game state so we use the client type which
    // allows players to use the plugin independently from the multiplayer server.
    type: 'client',

    main: main
};

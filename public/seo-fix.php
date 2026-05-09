<?php
// One-shot fixer: copies correct .htaccess and patches deploy.sh
$htaccess_src = "/home/saurabhinfosys.com/repo/out/.htaccess";
$htaccess_dst = "/home/saurabhinfosys.com/public_html/.htaccess";
$deploy_sh    = "/home/saurabhinfosys.com/deploy.sh";

// 1. Copy the correct .htaccess from the build output
if (file_exists($htaccess_src)) {
    copy($htaccess_src, $htaccess_dst);
    echo "htaccess copied\n";
} else {
    echo "htaccess source not found: $htaccess_src\n";
}

// 2. Patch deploy.sh to remove the --exclude='.htaccess' flag
if (file_exists($deploy_sh)) {
    $content = file_get_contents($deploy_sh);
    $patched = str_replace(" --exclude='.htaccess'", "", $content);
    file_put_contents($deploy_sh, $patched);
    echo "deploy.sh patched\n";
} else {
    echo "deploy.sh not found: $deploy_sh\n";
}

// 3. Self-delete
unlink(__FILE__);
echo "done\n";


/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   hook.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mafaussu <mafaussu@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/06/30 12:00:00 by mafaussu          #+#    #+#             */
/*   Updated: 2022/06/30 12:42:21 by mafaussu         ###   ########lyon.fr   */
/*                                                                            */
/* ************************************************************************** */

console.log("hook::init");
function hook(target, replacement)
{
    const original_function = target;
    return function(...arguments) {
        const cb = (function (arguments) {
            return original_function.apply(this, arguments);
        }).bind(this);
        arguments.unshift(cb);
        return replacement.apply(this, arguments);
    };
}

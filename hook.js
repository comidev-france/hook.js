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

function hook(target, replacement)
{
    const original_function = target;
    return function(...arguments) {
        const firstArg = (function (_arguments) {
            return original_function.apply(this, _arguments);
        }).bind(this);
        arguments.unshift(firstArg);
        return replacement.apply(this, arguments);
    };
}